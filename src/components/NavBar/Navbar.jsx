import css from "./Navbar.module.css";
import { useState, useEffect, useEffectEvent, useContext } from "react";
import {
  Flex,
  Box,
  Button,
  Image,
  Icon,
  Avatar,
  HStack,
  Stack,
  Dialog,
  Portal,
  createOverlay,
} from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";
import LogoMd from "../../assets/Cropped.png";
import MenuComponent from "../MenuComponent/MenuComponent.jsx";
import SearchComponent from "../SearchBar/SearchComponent.jsx";
import CartComponent from "../CartButton/CartComponent.jsx";
import { Link } from "react-router-dom";
import { LuSearch, LuUser } from "react-icons/lu";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Navbar() {
  const dialog = createOverlay((props) => {
    const { title, description, content, ...rest } = props;
    return (
      <Dialog.Root {...rest}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content h={"400px"} minW={"300px"}>
              <SearchComponent />
              <Dialog.Body spaceY="4"></Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    );
  });

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
      {/* Base Model Design */}
      <Box h={"60px"} m={"5px"} showFrom="md" hideAfter="md">
        <Stack>
          <HStack
            minW={"280px"}
            borderBottom={"solid 1px rgba(100, 100, 100, 0.11)"}
            paddingBottom={"10px"}
          >
            <Flex align={"center"} justify={"space-between"} w={"100%"}>
              <Link to={"/"}>
                <Image
                  h={"50px"}
                  w={"80px"}
                  src={Logo}
                  justify={"flex-start"}
                />
              </Link>
              <HStack w={"200px"} gap={"20px"}>
                <Link to={"/Checkout"}>
                  <CartComponent />
                </Link>
                <Button
                  onClick={() => {
                    dialog.open("a", {
                      title: "Dialog Title",
                      description: "Dialog Description",
                    });
                  }}
                >
                  <Icon as={LuSearch}></Icon>
                </Button>
                <dialog.Viewport />
                <Link to="/login_signup">
                  <Avatar.Root variant={"solid"}>
                    <Avatar.Fallback name="Guest Account" />
                  </Avatar.Root>
                </Link>
              </HStack>
            </Flex>
          </HStack>
          <HStack>
            <MenuComponent />
          </HStack>
        </Stack>
      </Box>
    </>
  );
}
