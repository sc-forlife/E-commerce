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
      <div className={css.navbar_container}>
        <div id={css.navbar_side1}>
          <div id={css.logo_search}>
            <h1 id={css.logo}>Logo</h1>
            <div id={css.search}>
              <Autocomplete
                disablePortal
                options={productlabels}
                freeSolo
                getOptionLabel={(options) => options.title}
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
