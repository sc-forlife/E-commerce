import { allShopProducts } from "../getAllProducts/getAllProducts.js";
import { categories } from "../../data/category_data.js";

export async function searchQuery(param) {
  const shopItems = await allShopProducts(categories);
  const searchedArray = shopItems.filter((item) => {
    //only match this regex
    const regex = new RegExp(`\\s*${param}\\s*`, "i");
    const bool = regex.test(item.category) || regex.test(item.title);

    return bool;
  });

  // returns [{product one},{product two},{product three},{product one},{product two},{product three}]
  return searchedArray;
}
