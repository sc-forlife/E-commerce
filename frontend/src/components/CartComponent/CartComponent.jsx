import { Box, Text, Center, Flex, Heading, Icon } from "@chakra-ui/react";
import { useState, useContext, useRef } from "react";
import CartTableHeading from "../CartTableHeading/CartTableHeading";
import CartTable from "../CartTable/CartTable";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <>
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
    </>
  );
}
