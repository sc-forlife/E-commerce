//categories to get
const categories = ["beauty", "tops"];

async function testingApi(category) {
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

export async function shopProducts() {
  //get only products for specific categories
  const selectedProducts = [];
  for (const item of categories) {
    const salem = await testingApi(item);
    selectedProducts.push(salem);
  }
  return selectedProducts;
}
