import React from 'react';
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/LoginForm';
import Layout from './componet/Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orderlists from './pages/Orderlists';
import ProductDetails from './pages/ProductDetails';
// import OrderDetails from './pages/Orderdetails';
import Password from './components/Password';
import Addproduct from './componet/AllProduct/Addproduct';

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/password" element={<Password />} />
            <Route path="/home" element={<Layout />}>

              <Route path="/home" element={<Dashboard />} />

              <Route path="/home/product" element={<Products />} />
              <Route path="/home/product/:id" element={<ProductDetails />} />
              <Route path="/home/product/addproduct" element={<Addproduct />} />

              <Route path="/home/orderlist" element={<Orderlists />} />
              {/* <Route path="/home/orderlist/:orderid" element={<OrderDetails />} /> */}

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
