import { categories } from "../../data/category_data.js";

export async function getCategory(category) {
  const categoryFormatted = category.toLowerCase();

  if (!categories.includes(categoryFormatted)) {
    throw new Error("Enter a valid category");
    return;
  }
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${categoryFormatted}`,
    );
    const responseData = await response.json();

    // returns [{product one},{product two},{product three} , ...]
    return responseData.products;
  } catch (err) {
    console.error(err, "something went wrong");
  }
}
