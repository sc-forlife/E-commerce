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
import { Alert } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";

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
      <Box bg={"yellow"} w={"100%"} h={"60px"}>
        <Flex bg={"blue"}>
          <Image h={"60px"} src={Logo} justify={"flex-start"} />
          <Flex justify="center">
            <Autocomplete
              id="free-solo-demo"
              sx={{
                "& .MuiInputBase-root": { height: "40px" },
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
        </Flex>
        <Flex></Flex>
      </Box>
    </>
  );
}
