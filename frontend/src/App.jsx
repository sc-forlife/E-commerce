import Display from "./components/displayProducts/Display";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import { createContext } from "react";
import { storeProducts } from "./hooks/products";

export const ProductsContext = createContext();

export default function App() {
  const { products, setProducts } = storeProducts();

  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <Navbar />
        <Display />
      </ProductsContext.Provider>
    </>
  );
}
