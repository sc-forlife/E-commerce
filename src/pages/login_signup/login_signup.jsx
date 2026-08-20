import {
  Button,
  Box,
  Field,
  Input,
  Stack,
  Center,
  AspectRatio,
  Image,
  HStack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { useState, createContext } from "react";
import SignUp from "../../components/SignUp/SignUp";
import Logo from "../../assets/Logo.png";
import Login from "../../components/Login/Login";
import { LuHouse } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function loginSignUp() {
  const [isUser, setIsUser] = useState(true);

  return (
    <>
      <Flex
        h={"100vh"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Link
          to={"/"}
          style={{
            alignSelf: "flex-start",
            margin: "0px",
            position: "absolute",
          }}
        >
          <Button variant={"ghost"}>
            <Icon as={LuHouse}></Icon>
            Home
          </Button>
        </Link>
        <Center
          w={"100%"}
          minW="300px"
          marginTop={"50px"}
          marginBottom={"20px"}
          maxW={"500px"}
        >
          {isUser ? <Login user={setIsUser} /> : <SignUp user={setIsUser} />}
        </Center>
        <Center
          width={{ base: "100%", md: "55%" }}
          height={{ base: "40%", md: "100%" }}
          minH={"200px"}
          bg={"black"}
        >
          <Image
            src={Logo}
            bg={"black"}
            width={{ base: "50%", md: "90%" }}
            maxW={{ base: "220px", md: "300px" }}
            minW={"150px"}
          />
        </Center>
      </Flex>
    </>
  );
}
