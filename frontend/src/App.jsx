import { testingApi } from "./api/testing";
import { useState, useEffect } from "react";

export default function App() {
  const [product, setProduct] = useState({});

  async function run() {
    const data = await testingApi();
    console.log(data);
  }

  useEffect(() => {
    run();
  }, []);

  return <></>;
}
