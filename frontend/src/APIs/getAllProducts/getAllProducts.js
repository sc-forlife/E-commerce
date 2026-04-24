import { categories } from "../../data/category_data.js";

//categories to get

async function getApi(category) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`,
    );
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.error(err);
  }
}

export async function allShopProducts() {
  //get only products for specific categories
  const selectedProducts = [];
  for (const item of categories) {
    const salem = await getApi(item);
    selectedProducts.push(salem);
  }
  //returns an array with objects , each object is a different category
  //[{products: Array(5), total: 5, skip: 0, limit: 5} , {products: Array(5), total: 5, skip: 0, limit: 5}]
  return selectedProducts;
}
