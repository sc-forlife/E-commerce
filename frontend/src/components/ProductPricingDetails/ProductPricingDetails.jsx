import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Badge,
  Image,
  RatingGroup,
} from "@chakra-ui/react";
import { searchQuery } from "../../APIs/getSearch/getSearchQuery";
import { useEffect, useState, createContext, useContext } from "react";
import { SelectedProduct } from "../../pages/ViewProduct/ViewProduct";
import SpinnerComponent from "../Spinner/SpinnerComponent";
import Rating from "../Rating/Rating";
import ProductSize from "../ProductSize/ProductSize";

export const UserProductSize = createContext();

export default function ProductDescription() {
  //Use create context to provide the details
  const { product } = useContext(SelectedProduct);

  const [size, setSize] = useState("");

  //Think about Category ,
  //Think about tags

  return (
    <>
      <Box
        bg={""}
        maxW={"450px"}
        h={"540px"}
        p={"20px"}
        rounded={"md"}
        borderColor={"ThreeDFace"}
        borderWidth={"4px"}
      >
        {product ? (
          <>
            <Stack gap={"35px"}>
              <Flex justifyContent={"space-between"}>
                <Heading>{product.title}</Heading>
                <Badge
                  colorPalette={
                    product.availabilityStatus === "In Stock" ? "green" : "red"
                  }
                >
                  {product.availabilityStatus}
                </Badge>
              </Flex>
              <Text>{product.description}</Text>
              {/* Pricing */}
              <Heading size={"3xl"}>${product.price}</Heading>
              {/* Rating */}
              <Flex gap={"10px"}>
                <Rating value={Math.round(product.rating)} />
                <Text fontSize={"14px"}>{product.rating}</Text>
              </Flex>
              <UserProductSize.Provider value={{ size, setSize }}>
                <ProductSize />
              </UserProductSize.Provider>
              <Button>Add to Cart</Button>
            </Stack>
          </>
        ) : (
          <SpinnerComponent />
        )}
      </Box>
    </>
  );
}
