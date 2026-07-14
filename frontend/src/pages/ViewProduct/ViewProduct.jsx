import { useState, useEffect, createContext, useRef } from "react";
import { searchQuery } from "../../APIs/getSearch/getSearchQuery";
import ProductDescription from "../../components/ProductPricingDetails/ProductPricingDetails";
import ProductDetails from "../../components/ProductExtraData/ProductExtraData";
import ProductImage from "../../components/ProductImage/ProductImage";
import SpinnerComponent from "../../components/Spinner/SpinnerComponent";
import NavBar from "../../components/NavBar/Navbar";
import { Flex, HStack, Box } from "@chakra-ui/react";
import { UserContext } from "../home/Home";
import { useParams, useNavigate } from "react-router-dom";

export const SelectedProduct = createContext();

export default function ViewProduct() {
  const [product, setProduct] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const { productId } = useParams();
  const page = useRef("View Page");

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
      <UserContext.Provider value={{ searchProduct, setSearchProduct, page }}>
        <NavBar />
      </UserContext.Provider>
      {product ? (
        <>
          <SelectedProduct.Provider value={{ product: product }}>
            <Flex justifyContent="center" align={"center"}>
              <HStack gap={"150px"} marginTop={"40px"} marginBottom={"100px"}>
                <ProductImage />
                <ProductDescription />
              </HStack>
            </Flex>
            <Box paddingLeft={"30px"} marginBottom={"40px"}>
              <ProductDetails />
            </Box>
          </SelectedProduct.Provider>
        </>
      ) : (
        <>
          <SpinnerComponent />
        </>
      )}
    </>
  );
}

// You need to add:
// Color Selection
// Size Selection
// Quantity Selection
