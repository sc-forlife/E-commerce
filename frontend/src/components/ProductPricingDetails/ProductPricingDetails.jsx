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
import { CartContext } from "../../App";
import SpinnerComponent from "../Spinner/SpinnerComponent";
import Rating from "../Rating/Rating";
import ProductSize from "../ProductSize/ProductSize";

export const UserProductSize = createContext();

export default function ProductDescription() {
  //Use create context to provide the details
  const { cartProducts, addCart, getFreeCartId, inCart } =
    useContext(CartContext);

  const { product } = useContext(SelectedProduct);

  const [size, setSize] = useState("");

  function enterToCart() {
    addCart({
      cartId: cartProducts.length <= 0 ? 0 : getFreeCartId(),
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1,
      cartPrice: product.price,
    });
  }

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
              {inCart(product.id) ? (
                <>
                  <Button onClick={enterToCart} disabled>
                    Item Added
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={enterToCart}>Add to Cart</Button>
                </>
              )}
            </Stack>
          </>
        ) : (
          <SpinnerComponent />
        )}
      </Box>
    </>
  );
}
