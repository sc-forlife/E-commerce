import Display from "./components/DisplayProducts/Card";
import Navbar from "./components/NavBar/Navbar";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { storeProducts } from "./hooks/products";
import { categories } from "./data/category_data";
import { allShopProducts } from "./APIs/getAllProducts/getAllProducts";
import { Flex } from "@chakra-ui/react";

export const ProductsContext = createContext();

export default function App() {
  const { products, setProducts } = storeProducts();
  const [storeProductsAPI, setStoreProducts] = useState("");

  async function getProducts() {
    setStoreProducts(await allShopProducts(categories));
  }

  useEffect(() => {
    (async () => {
      getProducts();
    })();
  }, []);

  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts, categories }}>
        <Navbar />
        <Flex gap={"5"} margin={"10px"} wrap={"wrap"}>
          {storeProductsAPI
            ? storeProductsAPI.map((product) => {
                return (
                  <Display
                    price={product.price}
                    title={product.title}
                    img={product.images[0]}
                    alt={product.thumbnail}
                  />
                );
              })
            : null}
        </Flex>
      </ProductsContext.Provider>
    </>
  );
}
