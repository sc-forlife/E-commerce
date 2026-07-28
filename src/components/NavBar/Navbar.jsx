import css from "./Navbar.module.css";
import { useState, useEffect, useEffectEvent, useContext } from "react";
import { Flex, Box, Button, Image, Icon, Avatar } from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";
import LogoMd from "../../assets/SC Logo 1360x760.png";
import MenuComponent from "../MenuComponent/MenuComponent.jsx";
import SearchComponent from "../SearchBar/SearchComponent.jsx";
import CartComponent from "../CartButton/CartComponent.jsx";
import { Link } from "react-router-dom";
import { LuUser } from "react-icons/lu";

export default function Navbar() {
  return (
    <>
      <Box w={"100%"} h={"60px"} m={"5px"} display="flex" hideBelow="md">
        <Flex
          align={"center"}
          justify={"space-between"}
          w={"70%"}
          paddingRight={"10px"}
        >
          <Link to={"/"}>
            <Image h={"60px"} src={Logo} justify={"flex-start"} m={"5px"} />
          </Link>
          <MenuComponent />
          <SearchComponent />
        </Flex>
        <Flex align={"center"} justify={"space-around"} w={"30%"}>
          <Link to={"/Checkout"}>
            <CartComponent />
          </Link>
          <Link to="/login_signup">
            <Button variant={"ghost"}>Login / Sign Up</Button>
            <Avatar.Root variant={"solid"}>
              <Avatar.Fallback name="Guest Account" />
            </Avatar.Root>
          </Link>
        </Flex>
      </Box>
      <Box
        w={"100%"}
        h={"100px"}
        // bgColor="red.200"
        m={"5px"}
        bgImage="url(C:\Users\ThinkPad E480\OneDrive\Desktop\Coding\React Practice\E-commerce\src\assets\SC Logo.png)"
        bgSize="cover"
        hideFrom={"md"}
      >
        <Flex
          align={"center"}
          justify={"space-between"}
          w={"70%"}
          paddingRight={"10px"}
        >
          <MenuComponent />
          <SearchComponent />
        </Flex>
        <Flex align={"center"} justify={"space-around"} w={"30%"}>
          <Link to={"/Checkout"}>
            <CartComponent />
          </Link>
          <Link to="/login_signup">
            <Button variant={"ghost"}>Login / Sign Up</Button>
            <Avatar.Root variant={"solid"}>
              <Avatar.Fallback name="Guest Account" />
            </Avatar.Root>
          </Link>
        </Flex>
      </Box>
    </>
  );
}
