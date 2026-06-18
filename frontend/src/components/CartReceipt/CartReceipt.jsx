import {
  Button,
  ButtonGroup,
  Steps,
  Center,
  Icon,
  Flex,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useState, useContext, useRef } from "react";

export default function Receipt() {
  return (
    <>
      <Box
        bg={"bg.muted"}
        h={"370px"}
        w={"50%"}
        margin={"20px auto 10px"}
        borderRadius={"10px"}
      >
        <Box
          h={"10px"}
          bg={"blue"}
          borderTopRadius={"10px"}
          width={"100%"}
        ></Box>
        <Flex justifyContent={"center"} h={"95%"}>
          <Heading fontSize={"15px"}>Order Summary</Heading>
        </Flex>
        <Box
          h={"10px"}
          bg={"blue"}
          borderBottomRadius={"10px"}
          width={"100%"}
        ></Box>
      </Box>
    </>
  );
}
