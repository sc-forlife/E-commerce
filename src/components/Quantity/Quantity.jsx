import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
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
            onClick={() => setQuantity((q) => (q <= 1 ? 1 : q - 1))}
          >
            -
          </Button>
          <Text>{quantity}</Text>

          <Button variant={"ghost"} onClick={() => setQuantity((q) => q + 1)}>
            +
          </Button>
        </Flex>
      </Box>
    </>
  );
}
