import { allShopProducts } from "./api/getAllProducts";
import { useState, useEffect } from "react";

export default function App() {
  const [product, setProduct] = useState([{}]);

  async function run() {
    const data = await allShopProducts();
    setProduct(data);
  }

  useEffect(() => {
    run();
  }, []);

  console.log(product);

  return (
    <>
      <div>
        {product.map((item) => {
          const items = item.products;
          if (!items) return;
          for (const x of items) {
            console.log(x.title, x.category);
          }
        })}
      </div>
    </>
  );
}
