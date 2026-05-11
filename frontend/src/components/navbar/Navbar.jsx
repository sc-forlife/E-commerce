import css from "./Navbar.module.css";
import { numbersInWords } from "../../data/dummyData.js";
import { useState, useEffect, useEffectEvent, useContext } from "react";
import { getCategory } from "../../APIs/getCategory/getCategory.js";
import { storeProducts } from "../../hooks/products.js";
import { ProductsContext } from "../../App.jsx";
import { allShopProducts } from "../../APIs/getAllProducts/getAllProducts.js";
import { Flex, Box, Button, Image } from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";
import MenuComponent from "../MenuComponent/MenuComponent.jsx";
import SearchComponent from "../SearchBar/SearchComponent.jsx";
import CartComponent from "../CartButton/CartComponent.jsx";

export default function Navbar() {
  const { setProducts, categories } = useContext(ProductsContext);
  const [productlabels, setProductLabels] = useState();

  return (
    <>
      <Box w={"100%"} h={"60px"} display="flex">
        <Flex
          align={"center"}
          justify={"space-between"}
          w={"70%"}
          paddingRight={"10px"}
        >
          <Image h={"60px"} src={Logo} justify={"flex-start"} m={"5px"} />
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
