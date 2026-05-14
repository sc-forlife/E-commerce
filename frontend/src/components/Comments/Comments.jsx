import { Box, Avatar, HStack, Stack, Text, Blockquote } from "@chakra-ui/react";
import { useContext } from "react";
import { StoreProduct } from "../ProductDetails/ProductDetails";
import SpinnerComponent from "../Spinner/SpinnerComponent";
import Rating from "../Rating/Rating";

export default function Comments() {
  const { product } = useContext(StoreProduct);

  console.log(product);

  return (
    <>
      <Box>
        <Stack gap={"30px"}>
          {product.reviews ? (
            product.reviews.map((comment) => {
              return (
                <Box bg={"bg.muted"} p={"10px"} borderRadius={"2xl"}>
                  <Stack>
                    <HStack>
                      <Avatar.Root colorPalette="red">
                        <Avatar.Fallback />
                      </Avatar.Root>
                      <Stack gap={"0px"}>
                        <Text fontSize={"smaller"}>{comment.reviewerName}</Text>
                        <Rating size={"xs"} value={comment.rating} />
                      </Stack>
                    </HStack>
                    <Text marginLeft={"15px"}>{comment.comment}</Text>
                  </Stack>
                </Box>
              );
            })
          ) : (
            <>
              <SpinnerComponent />
            </>
          )}
        </Stack>
      </Box>
    </>
  );
}
