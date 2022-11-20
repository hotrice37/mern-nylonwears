import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import '@fontsource/poppins';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import CartPage from './pages/cart';
import ContactUs from './pages/contactus';
import Productdetails from './pages/productdetails';
import NotFoundPage from './pages/404';
import { StoreProvider } from './store';
import SignIn from './pages/login';
import ShippingAddress from './pages/shippingaddress';
import './components/css/index.css';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="/product/:slug" element={<Productdetails />}></Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/shipping" element={<ShippingAddress />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
