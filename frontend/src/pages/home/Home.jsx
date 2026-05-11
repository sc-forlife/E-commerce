import { useEffect, useState, createContext } from "react";
import NavBar from "../../components/NavBar/Navbar";
import Card from "../../components/Card/Card";
import { allShopProducts } from "../../APIs/getAllProducts/getAllProducts";
import { categories } from "../../data/category_data";
import { Flex } from "@chakra-ui/react";
import Display from "../../components/Card/Card";
import Spinner from "../../components/Spinner/SpinnerComponent";

export const UserContext = createContext();

export default function Home() {
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    (async () => {
      setSearchProduct(await allShopProducts(categories));
    })();
  }, []);
  return (
    <>
      <UserContext.Provider value={{ searchProduct, setSearchProduct }}>
        <NavBar />
      </UserContext.Provider>
      <Flex gap={"5"} margin={"10px"} wrap={"wrap"}>
        {searchProduct ? (
          searchProduct.map((product) => {
            return (
              <Display
                price={product.price}
                title={product.title}
                img={product.images[0]}
                alt={product.thumbnail}
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
