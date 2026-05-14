import { useState, useEffect } from "react";
import { createContext } from "react";
import Home from "./pages/home/Home";
import ProductImage from "./components/ProductImage/ProductImage"; // Testing Component
import ProductDescription from "./components/ProductDescription/ProductDescription";

export default function App() {
  return (
    <>
      <ProductDescription />
    </>
  );
}
