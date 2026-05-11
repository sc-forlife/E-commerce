import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState, useRef } from "react";
import { allShopProducts } from "../../APIs/getAllProducts/getAllProducts";
import { categories } from "../../data/category_data";

export default function SearchComponent() {
  let storeProductsAPI = useRef("");

  useEffect(() => {
    (async () => {
      storeProductsAPI.current = await allShopProducts(categories);
      console.log(storeProductsAPI.current);
    })();
  }, []);

  return (
    <>
      <Autocomplete
        id="free-solo-demo"
        sx={{
          "& .MuiInputBase-root": { height: "40px", width: "450px" },
        }}
        freeSolo
        onInputChange={(event, newInputValue) => console.log(newInputValue)}
        options={
          storeProductsAPI.current
            ? storeProductsAPI.current.map((option) => option.title)
            : null
        }
        renderInput={(params) => <TextField {...params} placeholder="Search" />}
      />
    </>
  );
}
