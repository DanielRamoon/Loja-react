import React from "react";
import { Routes, Route } from "react-router-dom";
import Store from "./paages/Store";
import Cart from "./paages/Cart";

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Content;
