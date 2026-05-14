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
import { useEffect, useState } from "react";
import SpinnerComponent from "../Spinner/SpinnerComponent";
import Rating from "../Rating/Rating";

export default function ProductDescription() {
  const [product, setProduct] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://dummyjson.com/test");
        const responseData = await response.json();
        console.log(responseData);
      } catch (err) {
        console.error("Something went wrong", err);
      }

      const [products] = await searchQuery("Tartan");
      console.log(products);
      setProduct(products);
    })();
  }, []);

  console.log(product);

  return (
    <>
      <Box
        m={"100px"}
        bg={""}
        maxW={"400px"}
        p={"20px"}
        rounded={"md"}
        borderColor={"ThreeDFace"}
        borderWidth={"4px"}
      >
        {product ? (
          <>
            <Stack gap={"25px"}>
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
              <Heading size={"3xl"}>${product.price}</Heading>
              <Flex gap={"10px"}>
                <Rating value={Math.round(product.rating)} />
                <Text fontSize={"14px"}>{product.rating}</Text>
              </Flex>
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
