import * as React from 'react'
import '../components/css/productdetails.css'
import { Helmet } from "react-helmet"
import { useReducer, useEffect } from "react"
import axios from 'axios'
import { useParams } from 'react-router'


const reducer = (state, action) => {
  switch(action.type){
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, loading: false, product: action.payload};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}

const Productdetails = () => {
  const params = useParams();
  const {slug}  = params;
  

  const [{loading, error, product}, dispatch] = useReducer(reducer, {
    loading: true, error: '', product: []
  })
  useEffect(()=>{
    const fetchData=async()=>{
      dispatch({type: 'FETCH_REQUEST'})
      try{
        const result=await axios.get(`/product/all/slug/${slug}`);
        dispatch({type: 'FETCH_SUCCESS', payload: result.data})
      }
      catch(err){
        dispatch({type: 'FETCH_FAIL', payload: err.message})
      }
    }
    fetchData();
  },[slug])
  return (
    <>
      <Helmet>
        <title>Product Details</title>
      </Helmet>
      {loading? (
        <div>Loading...</div>
        ) :error? (
          <div>{error}</div>
         ) : (
        <div className="container-fluid pt-4 products px-5">
          <div className={`small-container singleproduct`}>
            <div className="row">
              <div className={`col-4 col`}>
                <img src={product.img} alt={product.prodname} width="100%" id="ProductImg" />

                
              </div>
              <div className={`col-4 col`}>
                <p className="text-white">Home / {product.prodname} </p>
                <h2 className="text-white">{product.prodname}</h2>
                <h4 className="text-white">Rs {product.price}</h4>
                
                <div className={`col-4 col`}>
                  <select>
                    <option>Select Size</option>
                    <option>Large</option>
                    <option>Medium</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                </div>
                <div className="row align-items-center">
                  <div className={`col-4 col`}>
                    <input type="number" value="1" />
                  </div>
                  <div className={`col-4 col`}>
                    <a className={`btn text-white`}>Add to Cart</a>
                  </div>
                </div>
                
                <h3 className="text-white">Product Details <i className={`bi bi-indent`}></i></h3>
                <br />
                <p className="text-white">{product.desc}</p>
                
              </div>
            </div>
          </div>
          {/* title */}

          <div className="small-container">
            <div className="row">
            <h2 className="text-white">Related Products</h2>
            </div>
          </div>
        </div>
         )}
    </>
  )
}

export const Head = () => <title>Product</title>

export default Productdetails