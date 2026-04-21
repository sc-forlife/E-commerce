export async function testingApi() {
  try {
    const response = await fetch("https://dummyjson.com/products/?limit=0");
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.log(err);
  }
}
