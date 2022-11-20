import * as React from 'react';
import { useEffect, useReducer, useContext } from 'react';
import '../components/css/card.css';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Rating from './rating';
import { Store } from '../store';
import LoadingBox from './loadingbox';
import MessageBox from './messagebox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Card = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    loading: true,
    error: '',
    products: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  // const { state, dispatch: ctxDispatch } = useContext(Store);
  // const addToCartHandler = () => {
  //   ctxDispatch({
  //     type: 'CART_ADD_ITEM',
  //     payload: { ...products, quantity: 1 },
  //   });
  // };

  const renderCard = (carddata) => {
    const addToCartHandler = async (item) => {
      const existItem = cartItems.find((x) => x._id === carddata._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;
      const { data } = await axios.get(`/api/products/${item._id}`);
      if (data.stock < quantity) {
        window.alert('Sorry. Product is out of stock');
        return;
      }
      ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...item, quantity },
      });
    };
    return (
      <div className={`col-sm-6 col-md-4 col-lg-3 col`} key={carddata.slug}>
        <div className={`card text-center align-items-center text-bg-dark`}>
          <div>
            <a
              className="text-decoration-none"
              href={`product/${carddata.slug}`}
            >
              <div
                className={`container d-flex align-items-center justify-content-center`}
              >
                <img
                  src={carddata.img}
                  className="card-img-top"
                  alt={carddata.prodname}
                />
              </div>
            </a>
            <div className="card-body">
              <a
                className="text-decoration-none"
                href={`product/${carddata.slug}`}
              >
                <h6 className="card-title text-white">{carddata.prodname}</h6>
                <span className="card-text">
                  <Rating
                    rating={carddata.rating}
                    numReviews={carddata.numReviews}
                  />
                </span>
              </a>
              {/* add to cart */}
              Rs {carddata.price}
              {/* <div className="buttons d-flex gap-3 justify-content-center align-items-center">
                      <i onclick="decrement(${id}), generateCartItems()" className={`${bi} btn py-0 px-1 text-white bi bi-dash-lg`} role="button"></i>
                        <div className="quantity text-white">${search.item}</div>
                      <i onclick="increment(${id}), generateCartItems()" className={`${bi} btn py-0 px-1 text-white bi bi-plus-lg`} role="button"></i>
                    </div> */}
            </div>
          </div>
          <div className={`card-footer d-flex flex-column`}>
            <div>
              {carddata.stock === 0 ? (
                <button
                  className="btn btn-outline-light btn-sm cardfooter"
                  disabled
                >
                  Out of Stock
                </button>
              ) : (
                <button
                  className="btn btn-outline-light btn-sm cardfooter"
                  onClick={() => {
                    addToCartHandler(carddata);
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="Featured" className={`container pt-lg-4  px-0`}>
      {/* <!--Featured Products--> */}
      <div className="row m-auto">
        <div className="col">
          <h2 className={`title`}>Products</h2>
        </div>
      </div>
      <div
        id="featured"
        className="shop row products justify-content-center px-lg-5 mx-lg-5"
      >
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="alert-danger">{error}</MessageBox>
        ) : (
          products.map(renderCard)
        )}
      </div>
      {/* <!--Featured Products End--> */}
    </div>
  );
};

export default Card;
