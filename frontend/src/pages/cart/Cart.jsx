import { Box, Text, Center, Flex, Heading } from "@chakra-ui/react";
import { useState, useContext, useRef } from "react";
import CartTableHeading from "../../components/CartTableHeading/CartTableHeading";
import CartTable from "../../components/CartTable/CartTable";

export default function Cart() {
  return (
    <>
      <Center w={"100vw"} h={"100vh"} bg={"pink"}>
        <Box bg={"white"} w={"800px"} h={"450px"} borderRadius={"20px"}>
          <CartTableHeading itemNumber={2} />
          <hr></hr>
          <CartTable />
        </Box>
      </Center>
    </>
  );
}
