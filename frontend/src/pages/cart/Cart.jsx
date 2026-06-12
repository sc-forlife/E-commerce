import { Box, Text, Center, Flex, Heading, Icon } from "@chakra-ui/react";
import { useState, useContext, useRef } from "react";
import CartTableHeading from "../../components/CartTableHeading/CartTableHeading";
import CartTable from "../../components/CartTable/CartTable";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <>
      <Center w={"100vw"} h={"100vh"} bg={"pink"}>
        <Box bg={"white"} w={"800px"} h={"450px"} borderRadius={"20px"}>
          <CartTable />
          <Flex justifyContent={"space-around"}>
            <Link to={"/"}>
              <Text>
                <Icon>
                  <LuArrowLeft />
                </Icon>
                Back to Store
              </Text>
            </Link>
            <Text>
              Continue{" "}
              <Icon>
                <LuArrowRight />
              </Icon>
            </Text>
          </Flex>
        </Box>
      </Center>
    </>
  );
}
