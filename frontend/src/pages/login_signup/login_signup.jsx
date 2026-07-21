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
} from "@chakra-ui/react";
import { useState, createContext } from "react";
import SignUp from "../../components/SignUp/SignUp";
import Logo from "../../assets/Logo.png";
import Login from "../../components/Login/Login";

export default function loginSignUp() {
  const [isUser, setIsUser] = useState(true);

  return (
    <>
      <Flex h={"100vh"} justifyContent={"space-between"} alignItems={"center"}>
        <Center w={"50%"}>
          {isUser ? <Login user={setIsUser} /> : <SignUp user={setIsUser} />}
        </Center>
        <Center width={"55%"} height={"100%"} bg={"black"}>
          <Image src={Logo} bg={"black"} width={"400px"} />
        </Center>
      </Flex>
    </>
  );
}
