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
  //Use create context to provide the details
  const [product, setProduct] = useState("");

  //Add a Quantity Input
  //Think about Category ,
  //Think about tags

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
            <Stack gap={"40px"}>
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
