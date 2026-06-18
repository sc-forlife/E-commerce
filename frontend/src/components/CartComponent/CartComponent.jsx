import { Box, Text, Center, Flex, Heading, Icon } from "@chakra-ui/react";
import { useState, useContext, useRef } from "react";
import CartTableHeading from "../CartTableHeading/CartTableHeading";
import CartTable from "../CartTable/CartTable";

import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <>
      <CartTable />
    </>
  );
}
