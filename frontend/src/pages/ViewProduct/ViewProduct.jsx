import { useState, useEffect, createContext } from "react";
import { searchQuery } from "../../APIs/getSearch/getSearchQuery";
import ProductDescription from "../../components/ProductPricingDetails/ProductPricingDetails";
import ProductDetails from "../../components/ProductExtraData/ProductExtraData";
import ProductImage from "../../components/ProductImage/ProductImage";
import SpinnerComponent from "../../components/Spinner/SpinnerComponent";
import { Flex, HStack } from "@chakra-ui/react";

export const SelectedProduct = createContext();

export default function ViewProduct() {
  const [product, setProduct] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const [response] = await searchQuery("Tartan");
        setProduct(response);
      } catch (err) {
        console.error("Something went wrong", err);
      }
    })();
  }, []);

  return (
    <>
      {console.log(Boolean(product))}
      {product ? (
        <>
          <SelectedProduct.Provider value={{ product: product }}>
            <HStack bg={"green"}>
              <Flex justifyContent="center" align={"center"}>
                <ProductImage />
                <ProductDescription />
              </Flex>
            </HStack>

            <ProductDetails />
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
