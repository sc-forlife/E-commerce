import {
  Button,
  Field,
  Input,
  Stack,
  Center,
  AspectRatio,
  Image,
  HStack,
} from "@chakra-ui/react";
import SignUp from "../../components/SignUp/SignUp";
import Logo from "../../assets/Logo.png";

export default function loginSignUp() {
  return (
    <>
      <HStack h={"100vh"} bg={"bg.muted"}>
        <SignUp />
        <AspectRatio borderRadius={"10px"} bg="red" maxW="450px" ratio={1 / 1}>
          <Image src={Logo} objectFit={"cover"} />
        </AspectRatio>
      </HStack>
    </>
  );
}
