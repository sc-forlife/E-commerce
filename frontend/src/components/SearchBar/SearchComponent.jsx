import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState, useRef, useContext } from "react";
import { allShopProducts } from "../../APIs/getAllProducts/getAllProducts";
import { categories } from "../../data/category_data";
import { UserContext } from "../../pages/home/Home";
import { searchQuery } from "../../APIs/getSearch/getSearchQuery";
import { useNavigate } from "react-router-dom";

export default function SearchComponent({}) {
  const navigate = useNavigate();

  const { setSearchProduct, page } = useContext(UserContext);

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

  function changeProduct(link) {
    navigate(`/ViewProduct/${link}`);
  }

  console.log(page.current);

  return (
    <>
      {page.current === "Home" ? (
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
            renderInput={(params) => (
              <TextField {...params} placeholder="Search" />
            )}
          />
        </>
      ) : (
        <>
          <Autocomplete
            disablePortal
            sx={{
              "& .MuiInputBase-root": { height: 40, width: "450px" },
            }}
            onChange={(event, newInputValue) => {
              changeProduct(newInputValue);
            }}
            options={storeProductsAPI.map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Products" />
            )}
          />
        </>
      )}
    </>
  );
}
