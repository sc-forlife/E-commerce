import { testingApi } from "./api/testing";
import { useState, useEffect } from "react";

export default function App() {
  const [product, setProduct] = useState({});

  async function run() {
    const data = await testingApi();
    setProduct(data);
  }

  useEffect(() => {
    run();
  }, []);

  console.log(product);

  return (
    <>
      <div></div>
    </>
  );
}
