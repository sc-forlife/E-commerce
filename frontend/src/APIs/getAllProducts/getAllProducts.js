import { categories } from "../../data/category_data.js";
import { getCategory } from "../getCategory/getCategory.js";

//categories to get

export async function allShopProducts() {
  const selectedProducts = [];

  for (const item of categories) {
    const categoryProducts = await getCategory(item);

    selectedProducts.push(categoryProducts);
  }

  // returns [[{product one},{product two},{product three} , ...],[{product one},{product two},{product three} , ...]]

  return selectedProducts;
}
