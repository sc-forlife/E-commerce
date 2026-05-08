import css from "./Navbar.module.css";
import { numbersInWords } from "../../data/dummyData.js";
import { useState, useEffect, useEffectEvent } from "react";
import { getCategory } from "../../APIs/getCategory/getCategory";
import { storeProducts } from "../../hooks/products";
import { useContext } from "react";
import { ProductsContext } from "../../App";
import { allShopProducts } from "../../APIs/getAllProducts/getAllProducts.js";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Alert, Icon } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";
import { Menu } from "@chakra-ui/react";
import { Portal } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { Float } from "@chakra-ui/react";
import { Circle } from "@chakra-ui/react";

import { FaCartPlus } from "react-icons/fa";

export default function Navbar() {
  const { setProducts, categories } = useContext(ProductsContext);
  const [productlabels, setProductLabels] = useState();

  async function formatProducts() {
    const data = await allShopProducts(categories);
    const objects = [];
    data.forEach((category) => {
      for (const item of category) {
        objects.push(item);
      }
    });
    return objects;
  }

  useEffect(() => {
    (async () => {
      const data = await formatProducts();
      setProductLabels(data);
    })();
  }, []);

  //Send data to the display component
  function getProductsByCategory(category) {
    setProducts(category);
  }

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
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button size="sm" variant="outline">
                Select Anime
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  {links.map((link) => (
                    <Menu.Item key={link.href} asChild value={link.title}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.title}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>

          <Autocomplete
            id="free-solo-demo"
            sx={{
              "& .MuiInputBase-root": { height: "40px", width: "450px" },
            }}
            freeSolo
            //   onChange={(event, newValue) => setDisplayValue(newValue)}
            // onInputChange={(event, newInputValue) =>
            //   setDisplayValue(newInputValue)
            // }
            // options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Search" />
            )}
          />
        </Flex>
        <Flex align={"center"} justify={"space-around"} w={"30%"}>
          <Box position={"relative"}>
            <Icon>
              <FaCartPlus style={{ width: "40px" }} />
            </Icon>
            <Float>
              <Circle size="5" bg="red" color="white">
                0
              </Circle>
            </Float>
          </Box>
          <Button variant={"ghost"}>Login / Sign Up</Button>
        </Flex>
      </Box>
    </>
  );
}

const links = [
  {
    title: "Naruto",
    href: "https://www.crunchyroll.com/naruto",
  },
  {
    title: "One Piece",
    href: "https://www.crunchyroll.com/one-piece",
  },
  {
    title: "Attack on Titan",
    href: "https://www.crunchyroll.com/attack-on-titan",
  },
];
