import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import '../components/css/productdetails.css';
import LoadingBox from '../components/loadingbox';
import MessageBox from '../components/messagebox';
import Rating from '../components/rating';
import { Store } from '../store';
import getError from '../utils';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, product: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Productdetails() {
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    product: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const addToCartHandler = () => {
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity: 1 },
    });
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="alert-danger">{error}</MessageBox>
  ) : (
    <div className="p-4 p-lg-5 p-details container">
      <div className="row">
        <div className="col-6 text-center">
          <img className="img-large" src={product.img} alt={product.prodname} />
        </div>
        <div className="col-3">
          <ul class="list-group list-group-flush rounded">
            <li class="list-group-item bg-dark text-white">
              <Helmet>
                <title>{product.prodname}</title>
              </Helmet>
              <h1>{product.prodname}</h1>
            </li>
            <li class="list-group-item bg-dark">
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li class="list-group-item bg-dark text-white">
              Price: Rs {product.price}
            </li>
            <li class="list-group-item bg-dark text-white">
              Description: <p>{product.desc}</p>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <div className="card bg-dark">
            <div className="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-dark text-white">
                  <div className="row">
                    <div className="col">Price:</div>
                    <div className="col">Rs {product.price}</div>
                  </div>
                </li>
                <li class="list-group-item bg-dark text-white">
                  <div className="row">
                    <div className="col">Status:</div>
                    <div className="col">
                      {product.stock > 0 ? (
                        <span class="badge text-bg-success">In Stock</span>
                      ) : (
                        <span class="badge text-bg-danger">Unavailable</span>
                      )}
                    </div>
                  </div>
                </li>

                {product.stock > 0 && (
                  <li class="list-group-item bg-dark text-white">
                    <div className="d-grid">
                      <button
                        onClick={addToCartHandler}
                        type="button"
                        class="orange btn text-white"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
