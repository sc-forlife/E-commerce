import { Box, Flex, Heading } from "@chakra-ui/react";

export default function CartTableHeading({ itemNumber = 0 }) {
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
          <Heading>{itemNumber} Item</Heading>
        </Flex>
      </Box>
    </>
  );
}
