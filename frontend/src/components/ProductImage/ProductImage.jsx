import {
  AspectRatio,
  Image,
  Container,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { SelectedProduct } from "../../pages/ViewProduct/ViewProduct";
import HorizontalScrolling from "../HorizontalScrolling/HorinzontalScrolling";
import SpinnerComponent from "../Spinner/SpinnerComponent";

export default function ProductImage({ productTitle = "" }) {
  //Create a Context which provides product object
  const { product } = useContext(SelectedProduct);
  const [selectedImage, setSelectedImage] = useState();

  return (
    <>
      <Box w={"450px"}>
        {product ? (
          <>
            <AspectRatio bg="bg.muted" maxW="450px" ratio={1 / 1}>
              <Image
                src={selectedImage ? selectedImage : product.images[0]}
                objectFit={"cover"}
              />
            </AspectRatio>
            <HorizontalScrolling
              render={product.images.map((imageURL, index) => {
                return (
                  <AspectRatio
                    ratio={1 / 1}
                    width={"100px"}
                    h={"100px"}
                    bg={imageURL === selectedImage ? "bg.muted" : "none"}
                  >
                    <Image
                      key={index}
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
