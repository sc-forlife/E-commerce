import {
  AspectRatio,
  Image,
  Container,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { searchQuery } from "../../APIs/getSearch/getSearchQuery";
import HorizontalScrolling from "../HorizontalScrolling/HorinzontalScrolling";

export default function ProductImage() {
  const [product, setProduct] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [bgBox, setBgBox] = useState("yellow");

  useEffect(() => {
    (async () => {
      setProduct(await searchQuery("Tartan"));
    })();
  }, []);

  console.log(product);
  return (
    <>
      {product ? (
        <Box margin={"70px"} w={"450px"}>
          <AspectRatio bg="bg.muted" maxW="450px" ratio={1 / 1}>
            <Image
              src={selectedImage ? selectedImage : product[0].images[0]}
              objectFit={"cover"}
            />
          </AspectRatio>
          <HorizontalScrolling
            render={product[0].images.map((imageURL) => {
              return (
                <AspectRatio
                  ratio={1 / 1}
                  width={"100px"}
                  h={"100px"}
                  bg={imageURL === selectedImage ? "bg.muted" : "none"}
                >
                  <Image
                    src={imageURL}
                    onClick={() => setSelectedImage(imageURL)}
                  />
                </AspectRatio>
              );
            })}
          />
        </Box>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
