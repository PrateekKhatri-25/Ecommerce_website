import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Wishlist from './Wishlist';
import AddtoCart from './AddtoCart';
import MainContext from './Context/MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/product_detail/:id?",
    element: <ProductDetails />
  },
  {
    path: "/wish",
    element: <Wishlist />
  },
  {
    path: "/cart",
    element: <AddtoCart />
  }
])
root.render(
  <React.StrictMode>

    <MainContext>
      <RouterProvider router={routing} />
    </MainContext>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
