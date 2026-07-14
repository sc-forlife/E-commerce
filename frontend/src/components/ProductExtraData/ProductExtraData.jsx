import { useState, useEffect, createContext, useContext } from "react";
import { Box, For, SimpleGrid, Tabs, Text } from "@chakra-ui/react";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import Comments from "../Comments/Comments";
import ProductDetailsComponent from "../ProductDetailsComponent/ProductDetailsComponent";
import { SelectedProduct } from "../../pages/ViewProduct/ViewProduct";

export default function ProductDetails() {
  const { product } = useContext(SelectedProduct);

  return (
    <>
      <SimpleGrid columns={1} gap="14" width="full">
        <Tabs.Root
          key={"outline"}
          defaultValue="comments"
          variant={"outline"}
          width={"100%"}
        >
          <Tabs.List>
            <Tabs.Trigger value="comments">
              <LuUser size={"30"} />
              <Text fontSize={"20px"}>Comments</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value="details">
              <LuFolder size={"30"} />
              <Text fontSize={"20px"}>Product Details </Text>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="comments">
            <Comments />
          </Tabs.Content>
          <Tabs.Content value="details">
            <ProductDetailsComponent />
          </Tabs.Content>
        </Tabs.Root>
      </SimpleGrid>
    </>
  );
}
