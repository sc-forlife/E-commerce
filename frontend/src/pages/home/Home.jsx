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
export const CartContext = createContext();

export default function Home() {
  const [searchProduct, setSearchProduct] = useState("");
  const [cartProducts, setCartProducts] = useState([]);
  const page = useRef("Home");

  useEffect(() => {
    (async () => {
      setSearchProduct(await allShopProducts(categories));
    })();
  }, []);
  console.log(searchProduct);
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
                price={product.price}
                title={product.title}
                img={product.thumbnail}
                alt={product.title}
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
