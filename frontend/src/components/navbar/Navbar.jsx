import css from "./Navbar.module.css";
import { useState, useEffect, useEffectEvent, useContext } from "react";
import { Flex, Box, Button, Image } from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";
import MenuComponent from "../MenuComponent/MenuComponent.jsx";
import SearchComponent from "../SearchBar/SearchComponent.jsx";
import CartComponent from "../CartButton/CartComponent.jsx";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box w={"100%"} h={"60px"} m={"5px"} display="flex">
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
          <CartComponent />
          <Button variant={"ghost"}>Login / Sign Up</Button>
        </Flex>
      </Box>
    </>
  );
}
