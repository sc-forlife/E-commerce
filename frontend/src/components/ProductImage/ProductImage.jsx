import { AspectRatio, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { searchQuery } from "../../APIs/getSearch/getSearchQuery";

export default function ProductImage() {
  const [product, setProduct] = useState("");

  useEffect(() => {
    (async () => {
      setProduct(await searchQuery("Tartan Dress"));
    })();
  }, []);

  console.log(product);
  return (
    <>
      {product ? (
        <AspectRatio bg="gray" maxW="450px" ratio={1 / 1} margin={"50px"}>
          <Image src={product[0].images[0]} objectFit={"cover"} />
        </AspectRatio>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
