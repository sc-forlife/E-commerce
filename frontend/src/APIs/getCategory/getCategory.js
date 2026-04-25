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

    return responseData.products;
  } catch (err) {
    console.error(err, "somethign went wrong");
  }
}
