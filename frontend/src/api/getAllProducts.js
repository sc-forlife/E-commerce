//categories to get
const categories = ["beauty", "tops"];

async function getApi(category) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`,
    );
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.log(err);
  }
}

export async function allShopProducts() {
  //get only products for specific categories
  const selectedProducts = [];
  for (const item of categories) {
    const salem = await getApi(item);
    selectedProducts.push(salem);
  }
  return selectedProducts;
}
