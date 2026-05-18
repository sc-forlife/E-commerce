import { useState, useEffect, createContext, useContext } from "react";
import { searchQuery } from "../../APIs/getSearch/getSearchQuery";
import { For, SimpleGrid, Tabs, Text } from "@chakra-ui/react";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import Comments from "../Comments/Comments";
import ProductDetailsComponent from "../ProductDetailsComponent/ProductDetailsComponent";
import { SelectedProduct } from "../../pages/ViewProduct/ViewProduct";

export default function ProductDetails() {
  //Create a Context which provides product object
  const { product } = useContext(SelectedProduct);

  return (
    <>
      <SimpleGrid columns={2} gap="14" width="full">
        <Tabs.Root key={"outline"} defaultValue="comments" variant={"outline"}>
          <Tabs.List>
            <Tabs.Trigger value="comments">
              <LuUser />
              Comments
            </Tabs.Trigger>
            <Tabs.Trigger value="details">
              <LuFolder />
              Product Details
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
