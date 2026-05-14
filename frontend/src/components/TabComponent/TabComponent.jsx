import { For, SimpleGrid, Tabs, Text } from "@chakra-ui/react";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import Comments from "../Comments/Comments";

export default function TabComponent() {
  return (
    <SimpleGrid columns={2} gap="14" width="full">
      <Tabs.Root key={"outline"} defaultValue="members" variant={"outline"}>
        <Tabs.List>
          <Tabs.Trigger value="members">
            <LuUser />
            Members
          </Tabs.Trigger>
          <Tabs.Trigger value="projects">
            <LuFolder />
            Projects
          </Tabs.Trigger>
          <Tabs.Trigger value="tasks">
            <LuSquareCheck />
            Settings
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="members">
          <Comments />
        </Tabs.Content>
        <Tabs.Content value="projects">Manage your projects</Tabs.Content>
        <Tabs.Content value="tasks">
          Manage your tasks for freelancers
        </Tabs.Content>
      </Tabs.Root>
    </SimpleGrid>
  );
}
