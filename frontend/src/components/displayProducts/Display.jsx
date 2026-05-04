import { storeProducts } from "../../hooks/products";
import { useState, useEffect } from "react";
import { ProductsContext } from "../../App";
import { useContext } from "react";
// import { css } from "./Display.module.css";

export default function Display() {
  // const [displayProducts, setDisplayProducts] = useState();
  const { products } = useContext(ProductsContext);
  // useEffect(() => {
  //   setDisplayProducts(products);
  // });

  console.log(products);

  return (
    <>
      <div>
        <h1>{products.label}</h1>
      </div>
    </>
  );
}
