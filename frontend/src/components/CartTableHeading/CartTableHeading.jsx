import { Box, Flex, Heading } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";

export default function CartTableHeading() {
  const { cartProducts } = useContext(CartContext);
  const [itemNumber, setItemNumber] = useState(0);

  useEffect(() => {
    let totalItems = 0;
    if (cartProducts) {
      cartProducts.forEach((item) => {
        totalItems += item.quantity;
      });
      setItemNumber(totalItems);
    }
  }, [cartProducts]);

  return (
    <>
      <Box
        bg={"white"}
        w={"100%"}
        h={"80px"}
        borderTopRadius={"20px"}
        padding={"0px 10px"}
      >
        <Flex
          w={"100%"}
          h={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Heading>Shopping Cart</Heading>
          <Heading>
            {itemNumber} {itemNumber > 1 ? "Items" : "Item"}
          </Heading>
        </Flex>
      </Box>
      <hr></hr>
    </>
  );
}
