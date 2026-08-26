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
  const [alert, setAlert] = useState({ bool: false, type: "" });

  const page = useRef("Home");

  useEffect(() => {
    (async () => {
      //get all store items on initial render and populate catalog
      try {
        const products = await allShopProducts(categories);
        setSearchProduct(products);
      } catch (error) {
        setAlert({ bool: true, type: "serverFail" });
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
      {alert.bool ? <AlertPopUp type={alert.type} /> : null}

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
        ) : alert.bool ? (
          <ErrorIcon type={alert.type} />
        ) : (
          <Spinner />
        )}
      </Flex>
      <FooterComponent />
    </>
  );
}
