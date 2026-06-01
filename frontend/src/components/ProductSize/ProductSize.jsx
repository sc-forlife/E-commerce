import { useState, useEffect, useContext } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { UserProductSize } from "../ProductPricingDetails/ProductPricingDetails";

export default function ProductSize() {
  const { size, setSize } = useContext(UserProductSize);
  return (
    <>
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
          <Button
            variant={"surface"}
            onClick={() => setSize("S")}
            backgroundColor={size === "S" ? "grey" : null}
          >
            S
          </Button>
          <Button
            variant={"surface"}
            onClick={() => setSize("M")}
            backgroundColor={size === "M" ? "grey" : null}
          >
            M
          </Button>
          <Button
            variant={"surface"}
            onClick={() => setSize("L")}
            backgroundColor={size === "L" ? "grey" : null}
          >
            L
          </Button>
          <Button
            variant={"surface"}
            onClick={() => setSize("XL")}
            backgroundColor={size === "XL" ? "grey" : null}
          >
            XL
          </Button>
        </Flex>
      </Box>
    </>
  );
}
