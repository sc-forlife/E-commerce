import { allShopProducts } from "../getAllProducts/getAllProducts.js";

async function getProducts() {
  const allProducts = await allShopProducts();
  const itemDescription = [];

  //get each item into an array by title , category
  allProducts.forEach((item) => {
    const categoryItems = item.products;
    for (const product of categoryItems) {
      itemDescription.push(`${product.title} ${product.category}`);
    }
  });

  return itemDescription;
}

async function searchQuery(param) {
  const shopItems = await getProducts();

  //fix user param
  param = param.trim().toLowerCase();

  return shopItems.filter((item) => item.toLowerCase().includes(lowerParam));
}

console.log("Search Results");
console.log(await searchQuery(""));
