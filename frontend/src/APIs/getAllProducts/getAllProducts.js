import { getCategory } from "../getCategory/getCategory.js";

//categories to get

export async function allShopProducts(categories) {
  if (!categories) {
    throw new Error("Invalid parameter `categories`");
  }
  const selectedProducts = [];

  for (const item of categories) {
    const categoryProducts = await getCategory(item);

    for (const item of categoryProducts) {
      selectedProducts.push(item);
    }
  }

  // returns [[{product one},{product two},{product three} , ...],[{product one},{product two},{product three} , ...]]

  return selectedProducts;
}
