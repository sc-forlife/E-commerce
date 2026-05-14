import { For, SimpleGrid, Tabs, Text } from "@chakra-ui/react";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import Comments from "../Comments/Comments";
import ProductDetailsComponent from "../ProductDetailsComponent/ProductDetailsComponent";

export default function TabComponent() {
  return (
    <SimpleGrid columns={2} gap="14" width="full">
      <Tabs.Root key={"outline"} defaultValue="comments" variant={"outline"}>
        <Tabs.List>
          <Tabs.Trigger value="comments">
            <LuUser />
            Comments
          </Tabs.Trigger>
          <Tabs.Trigger value="details">
            <LuFolder />
            Projects
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
  );
}
