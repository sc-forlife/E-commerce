import { useEffect, useState, createContext, useRef } from "react";
import NavBar from "../../components/NavBar/Navbar";
import Card from "../../components/Card/Card";
import { allShopProducts } from "../../APIs/getAllProducts/getAllProducts";
import { categories } from "../../data/category_data";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Display from "../../components/Card/Card";
import Spinner from "../../components/Spinner/SpinnerComponent";

export const UserContext = createContext();

export default function Home() {
  const [searchProduct, setSearchProduct] = useState("");

  const page = useRef("Home");

  useEffect(() => {
    (async () => {
      setSearchProduct(await allShopProducts(categories));
    })();
  }, []);
  return (
    <>
      <UserContext.Provider value={{ searchProduct, setSearchProduct, page }}>
        <NavBar />
      </UserContext.Provider>
      <Flex
        gap={"5"}
        marginTop={"50px"}
        wrap={"wrap"}
        justifyContent={"center"}
      >
        {searchProduct ? (
          searchProduct.map((product) => {
            return (
              <Display
                item={product}
                linkTo={`/ViewProduct/${product.title}`}
                key={product.id}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </Flex>
    </>
  );
}
