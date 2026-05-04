import css from "./Navbar.module.css";
import { numbersInWords } from "../../data/dummyData.js";
import { useState, useEffect } from "react";
import { getCategory } from "../../APIs/getCategory/getCategory";
import { storeProducts } from "../../hooks/products";
import { useContext } from "react";
import { ProductsContext } from "../../App";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Navbar() {
  const { setProducts } = useContext(ProductsContext);

  function getProductsByCategory(category) {
    // const shopProducts = await getCategory(category);
    setProducts(category);
  }

  const [value, setValue] = useState("");
  console.log(value);
  return (
    <>
      <div className={css.navbar_container}>
        <div id={css.navbar_side1}>
          <div id={css.logo_search}>
            <h1 id={css.logo}>Logo</h1>
            <div id={css.search}>
              <Autocomplete
                disablePortal
                options={numbersInWords}
                onChange={(event, newValue) => getProductsByCategory(newValue)}
                sx={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Movie" />
                )}
              />
              <button>search</button>
            </div>
          </div>
          <div id={css.category}>
            <button
              id={css.category_button}
              onClick={() => getProductsByCategory("beauty")}
            >
              category One
            </button>
            <button id={css.category_button}>category Two</button>
            <button id={css.category_button}>category Three</button>
            <button id={css.category_button}>category Four</button>
          </div>
        </div>
        <div id={css.navbar_side2}>
          <button>Login/Sign Up</button>
          <button>View Cart</button>
        </div>
      </div>
    </>
  );
}
