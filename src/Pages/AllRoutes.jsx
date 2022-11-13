import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import PrivateRoute from "../Components/PrivateRoute";
import Checkout from "./Checkout";
import Logout from "./Logout";
import MoreInfo from "./MoreInfo";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/moreinfo" element={<MoreInfo />}></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/products/:id"
        element={
          <PrivateRoute>
            <ProductPage />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
