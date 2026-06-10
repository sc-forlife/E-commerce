import { useState, useEffect } from "react";
import { createContext } from "react";
import Home from "./pages/home/Home";
import ProductImage from "./components/ProductImage/ProductImage"; // Testing Component
import ProductDescription from "./components/ProductPricingDetails/ProductPricingDetails"; //Testing Component
import ProductDetails from "./components/ProductExtraData/ProductExtraData";
import ViewProduct from "./pages/ViewProduct/ViewProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      {/* <Home />
      <ViewProduct /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ViewProduct/:productId" element={<ViewProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
