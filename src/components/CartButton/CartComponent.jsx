import { Float, Circle, Box, Icon } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../../App";
import { useContext, useState } from "react";

export default function CartComponent() {
  const { cartProducts } = useContext(CartContext);

  return (
    <>
      <Box position={"relative"}>
        <FaCartPlus style={{ width: "40px" }} />
        <Float>
          <Circle size="5" bg="red" color="white">
            {cartProducts.length}
          </Circle>
        </Float>
      </Box>
    </>
  );
}
