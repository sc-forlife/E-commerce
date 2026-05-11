import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState, useRef, useContext } from "react";
import { allShopProducts } from "../../APIs/getAllProducts/getAllProducts";
import { categories } from "../../data/category_data";
import { UserContext } from "../../pages/home/Home";
import { searchQuery } from "../../APIs/getSearch/getSearchQuery";

export default function SearchComponent() {
  const { setSearchProduct } = useContext(UserContext);

  const [storeProductsAPI, setStoreProductsAPI] = useState([
    { title: "Loading" },
  ]);

  useEffect(() => {
    (async () => {
      setStoreProductsAPI(await allShopProducts(categories));
    })();
  }, []);

  async function sendSearchProduct(product) {
    setSearchProduct(await searchQuery(product));
  }

  return (
    <>
      <Autocomplete
        id="free-solo-demo"
        sx={{
          "& .MuiInputBase-root": { height: "40px", width: "450px" },
        }}
        freeSolo
        onInputChange={(event, newInputValue) =>
          sendSearchProduct(newInputValue)
        }
        options={storeProductsAPI.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} placeholder="Search" />}
      />
    </>
  );
}
