import { useState, useEffect, createContext, useRef } from "react";
import { searchQuery } from "../../APIs/getSearch/getSearchQuery";
import ProductDescription from "../../components/ProductPricingDetails/ProductPricingDetails";
import ProductDetails from "../../components/ProductExtraData/ProductExtraData";
import ProductImage from "../../components/ProductImage/ProductImage";
import SpinnerComponent from "../../components/Spinner/SpinnerComponent";
import NavBar from "../../components/NavBar/Navbar";
import { Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import { UserContext } from "../home/Home";
import { useParams } from "react-router-dom";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

export const SelectedProduct = createContext();

export default function ViewProduct() {
  const [product, setProduct] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const { productId } = useParams();
  const page = useRef("View Page");
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    //retrieve the selected product from params
    (async () => {
      try {
        const [response] = await searchQuery(productId);
        setProduct(response);
      } catch (err) {
        console.error("Something went wrong", err);
      }
    })();
    //dependecy catches change in params and changes product change in NAVBAR
  }, [productId]);

  return (
    <>
      {/* The context provides placeholder due to navbar expecting one , but it has not general use */}
      <UserContext.Provider value={{ searchProduct, setSearchProduct, page }}>
        <NavBar />
      </UserContext.Provider>
      {product ? (
        <>
          <SelectedProduct.Provider value={{ product: product }}>
            <Flex
              marginBottom={{ base: "0px", md: "100px" }}
              marginTop={{ base: "0px", md: "40px" }}
              m="auto"
              direction={{ base: "column", md: "row" }}
              justifyContent="space-around"
              align={"center"}
              w={"100%"}
              maxW="1200px"
              p={"10px"}
            >
              <ProductImage />
              <ProductDescription />
            </Flex>
            <Box
              paddingLeft={{ base: "10px", md: "30px" }}
              marginBottom={"40px"}
            >
              <ProductDetails />
            </Box>
          </SelectedProduct.Provider>
        </>
      ) : (
        <>
          <SpinnerComponent />
        </>
      )}
      <FooterComponent />
    </>
  );
}

// You need to add:
// Color Selection
// Size Selection
// Quantity Selection
