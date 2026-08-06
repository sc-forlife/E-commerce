import {
  Combobox,
  Portal,
  useFilter,
  useListCollection,
  useBreakpointValue,
} from "@chakra-ui/react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState, useRef, useContext } from "react";
import { allShopProducts } from "../../APIs/getAllProducts/getAllProducts";
import { categories } from "../../data/category_data";
import { UserContext } from "../../pages/home/Home";
import { searchQuery } from "../../APIs/getSearch/getSearchQuery";
import { useNavigate } from "react-router-dom";

export default function SearchComponent({ model = "" }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { setSearchProduct, page } = useContext(UserContext);

  //search list
  const [storeProductsAPI, setStoreProductsAPI] = useState([
    { title: "Loading" },
  ]);

  useEffect(() => {
    (async () => {
      //Populate the search list with all products
      const products = await allShopProducts(categories);
      setStoreProductsAPI(products);
      set(products);
    })();
  }, []);

  //populate the catalog , with a single searched item
  async function sendSearchProduct(product) {
    setSearchProduct(await searchQuery(product));
  }

  //change viewed product in the same page
  function changeProduct(link) {
    navigate(`/ViewProduct/${link}`);
  }

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter, set } = useListCollection({
    initialItems: storeProductsAPI,
    filter: contains,
    itemToString: (item) => item.title,
    itemToValue: (item) => item.title,
  });

  return (
    <>
      {/* Different NAV BAR systems for different pages */}
      {/* Home is search with free typing */}
      {/* ViewProduct is only select on available options , no free typing */}
      <>
        <Combobox.Root
          collection={collection}
          onInputValueChange={(e) => {
            filter(e.inputValue);
            setInputValue(e.inputValue);
          }}
          onValueChange={(e) => sendSearchProduct(e.value[0])}
          width={{ base: "90%", md: "50%", lg: "60%" }}
          m={"auto"}
          open={isMobile ? open : null}
        >
          <Combobox.Label></Combobox.Label>
          <Combobox.Control>
            <Combobox.Input
              placeholder="Type to search"
              onKeyDown={
                page.current === "Home"
                  ? (e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        sendSearchProduct(inputValue);
                      }
                    }
                  : null
              }
            />
            <Combobox.IndicatorGroup>
              <Combobox.ClearTrigger />
              <Combobox.Trigger />
            </Combobox.IndicatorGroup>
          </Combobox.Control>
          {/* <Portal> */}
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.Empty>No items found</Combobox.Empty>
              {collection.items.map((item) => (
                <Combobox.Item item={item} key={item.id}>
                  {item.title}
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
          {/* </Portal> */}
        </Combobox.Root>
        {/* <Autocomplete
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
          /> */}
      </>
    </>
  );
}
