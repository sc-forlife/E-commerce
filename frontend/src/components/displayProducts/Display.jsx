import { storeProducts } from "../../hooks/products";
import { useState, useEffect } from "react";
import { ProductsContext } from "../../App";
import { useContext } from "react";
// import { css } from "./Display.module.css";

export default function Display() {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <div>{products ? <h1>{products.title}</h1> : null}</div>
    </>
  );
}
