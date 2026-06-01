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
import { useEffect, useState, useContext } from "react";
import { SelectedProduct } from "../../pages/ViewProduct/ViewProduct";
import SpinnerComponent from "../Spinner/SpinnerComponent";
import Rating from "../Rating/Rating";

export default function ProductDescription() {
  //Use create context to provide the details
  const { product } = useContext(SelectedProduct);

  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("");

  //Add a Quantity Input
  //Think about Category ,
  //Think about tags

  console.log(quantity, "quantity");
  console.log(size, "size");

  return (
    <>
      <Box
        m={"100px"}
        bg={""}
        maxW={"400px"}
        h={"600px"}
        p={"20px"}
        rounded={"md"}
        borderColor={"ThreeDFace"}
        borderWidth={"4px"}
      >
        {product ? (
          <>
            <Stack gap={"30px"}>
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

              {/* Quantity Selection */}
              <Box>
                <Text fontSize={"15px"}>Quantity</Text>
                <Flex
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  borderColor={"ThreeDFace"}
                  borderWidth={"2px"}
                  w={"150px"}
                  h={"45px"}
                >
                  <Button
                    variant={"ghost"}
                    onClick={() => setQuantity((q) => (q <= 0 ? 0 : q - 1))}
                  >
                    -
                  </Button>
                  <Text>{quantity}</Text>

                  <Button
                    variant={"ghost"}
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </Button>
                </Flex>
              </Box>

              {/* Size Selection */}
              {/* The selected should stay selected */}
              <Box>
                <Text fontSize={"15px"}>Size</Text>
                <Flex
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  w={"200px"}
                  h={"45px"}
                >
                  <Button variant={"surface"} onClick={() => setSize("S")}>
                    S
                  </Button>
                  <Button variant={"surface"} onClick={() => setSize("M")}>
                    M
                  </Button>
                  <Button variant={"surface"} onClick={() => setSize("L")}>
                    L
                  </Button>
                  <Button variant={"surface"} onClick={() => setSize("XL")}>
                    XL
                  </Button>
                </Flex>
              </Box>

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
