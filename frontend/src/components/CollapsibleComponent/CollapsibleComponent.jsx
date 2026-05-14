import { Collapsible, Stack, Heading } from "@chakra-ui/react";
import { LuChevronRight } from "react-icons/lu";

export default function CollapsibleComponent({
  title = "Title",
  content = "",
}) {
  return (
    <>
      <Collapsible.Root>
        <Collapsible.Trigger
          paddingY="3"
          display="flex"
          gap="2"
          alignItems="center"
        >
          <Collapsible.Indicator
            transition="transform 0.2s"
            _open={{ transform: "rotate(90deg)" }}
          >
            <LuChevronRight />
          </Collapsible.Indicator>
          <Heading>{title}</Heading>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Stack padding="4" borderWidth="1px">
            {content}
          </Stack>
        </Collapsible.Content>
      </Collapsible.Root>
    </>
  );
}
