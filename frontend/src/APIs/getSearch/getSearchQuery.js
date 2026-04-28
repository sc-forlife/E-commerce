import { allShopProducts } from "../getAllProducts/getAllProducts.js";
import { categories } from "../../data/category_data.js";

export async function searchQuery(param) {
  const shopItems = await allShopProducts(categories);

  const finalProducts = shopItems.map((productArray) => {
    const searchedArray = productArray.filter((item) => {
      //only match this regex
      const regex = new RegExp(`\\s*${param}\\s*`, "i");
      const bool = regex.test(item.category) || regex.test(item.title);

      return bool;
    });
    return searchedArray;
  });

  // returns [[{product one},{product two},{product three} , ...],[{product one},{product two},{product three} , ...]]
  return finalProducts;
}
