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

  //search list
  const [storeProductsAPI, setStoreProductsAPI] = useState([
    { title: "Loading" },
  ]);

  useEffect(() => {
    (async () => {
      //Populate the search list with all products
      setStoreProductsAPI(await allShopProducts(categories));
    })();
  }, []);

  async function sendSearchProduct(product) {
    //populate the catalog , with a single searched item
    setSearchProduct(await searchQuery(product));
  }

  function changeProduct(link) {
    //change viewed product in the same page
    navigate(`/ViewProduct/${link}`);
  }

  return (
    <>
      {/* Different NAV BAR systems for different pages */}
      {/* Home is search with free typing */}
      {/* ViewProduct is only select on available options , no free typing */}
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
