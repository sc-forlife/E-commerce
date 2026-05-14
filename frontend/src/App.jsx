import { useState, useEffect } from "react";
import { createContext } from "react";
import Home from "./pages/home/Home";
import ProductImage from "./components/ProductImage/ProductImage"; // Testing Component
import ProductDescription from "./components/ProductPricingDetails/ProductPricingDetails"; //Testing Component
import ProductDetails from "./components/ProductExtraData/ProductExtraData";

export default function App() {
  return (
    <>
      <ProductDetails />
    </>
  );
}
