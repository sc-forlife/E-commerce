import { useEffect, useState, createContext, useRef } from "react";
import NavBar from "../../components/NavBar/Navbar";
import { allShopProducts } from "../../APIs/getAllProducts/getAllProducts";
import { categories } from "../../data/category_data";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Display from "../../components/Card/Card";
import Spinner from "../../components/Spinner/SpinnerComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import AlertPopUp from "../../components/AlertPopUp/AlertPopUp";
import ErrorIcon from "../../components/ErrorIcon/ErrorIcon";

export const UserContext = createContext();

export default function Home() {
  // variable catalog with the list of item/s being displayed
  const [searchProduct, setSearchProduct] = useState("");
  const [isError, setIsError] = useState(false);

  const page = useRef("Home");

  useEffect(() => {
    (async () => {
      //get all store items on initial render and populate catalog
      try {
        const products = await allShopProducts(categories);
        setSearchProduct(products);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <UserContext.Provider value={{ searchProduct, setSearchProduct, page }}>
        <NavBar />
      </UserContext.Provider>
      {/* Error handling */}
      {isError ? (
        <AlertPopUp alertTitle="Something went wrong with the server , Please try again later" />
      ) : null}

      <Flex
        gap={{ base: "10px", md: "20px" }}
        marginTop={"50px"}
        wrap={"wrap"}
        justifyContent={"center"}
      >
        {searchProduct ? (
          searchProduct.map((product, index) => {
            return (
              <Display
                item={product}
                linkTo={`/ViewProduct/${product.title}`}
                key={index}
              />
            );
          })
        ) : isError ? (
          <ErrorIcon />
        ) : (
          <Spinner />
        )}
      </Flex>
      <FooterComponent />
    </>
  );
}
