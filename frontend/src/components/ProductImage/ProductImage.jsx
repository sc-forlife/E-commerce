import {
  AspectRatio,
  Image,
  Container,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HorizontalScrolling from "../HorizontalScrolling/HorinzontalScrolling";
import SpinnerComponent from "../Spinner/SpinnerComponent";

export default function ProductImage({ productTitle = "" }) {
  //Create a Context which provides product object
  const [product, setProduct] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  return (
    <>
      <Box w={"450px"}>
        {product ? (
          <>
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
          </>
        ) : (
          <SpinnerComponent />
        )}
      </Box>
    </>
  );
}
