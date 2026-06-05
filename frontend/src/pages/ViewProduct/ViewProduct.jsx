import { useState, useEffect, createContext } from "react";
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

export const NewSelectedProduct = createContext();

export default function ViewProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const [changeProduct, setChangeProduct] = useState("");
  const { productId } = useParams();

  useEffect(() => {
    (async () => {
      if (changeProduct) {
        navigate(changeProduct);
      } else {
        try {
          const [response] = await searchQuery(productId);
          setProduct(response);
        } catch (err) {
          console.error("Something went wrong", err);
        }
      }
    })();
  }, []);

  return (
    <>
      <UserContext.Provider value={{}}>
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
