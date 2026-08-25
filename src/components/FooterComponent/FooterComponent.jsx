import { Flex, Center, Image } from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";

export default function FooterComponent() {
  return (
    <Center
      marginTop={{ base: "40px", md: "100px" }}
      width={{ base: "100%", md: "100%" }}
      height={{ base: "200px", md: "200px" }}
      position="relative"
      bottom="0"
      left="0"
      minH={"200px"}
      bg={"black"}
    >
      <Image
        src={Logo}
        bg={"black"}
        width={{ base: "50%", md: "90%" }}
        maxW={{ base: "220px", md: "150px" }}
        minW={"150px"}
      />
    </Center>
  );
}
