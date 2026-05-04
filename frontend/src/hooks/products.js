import { useState } from "react";

export function storeProducts() {
  const [products, setProducts] = useState();

  return { products, setProducts };
}
