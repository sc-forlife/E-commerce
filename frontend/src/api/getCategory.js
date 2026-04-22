import { categories } from "../data/category_data";

export async function getCategory(category) {
  if (!categories.includes(category)) {
    console.error("You have entered an invalid category");
    return;
  }
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`,
    );
    const responseData = await response.json();

    return responseData;
  } catch (err) {
    console.error(err, "somethign went wrong");
  }
}
