import { useState, useEffect, createContext } from "react";
import { searchQuery } from "../../APIs/getSearch/getSearchQuery";
import Tabs from "../TabComponent/TabComponent";

export const StoreProduct = createContext();

export default function ProductDetails() {
  const [product, setProduct] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://dummyjson.com/test");
        const responseData = await response.json();
        console.log(responseData);
      } catch (err) {
        console.error("Something went wrong", err);
      }

      const [products] = await searchQuery("Tartan");
      setProduct(products);
    })();
  }, []);

  return (
    <>
      <StoreProduct.Provider value={{ product: product }}>
        <Tabs />
      </StoreProduct.Provider>
    </>
  );
}
