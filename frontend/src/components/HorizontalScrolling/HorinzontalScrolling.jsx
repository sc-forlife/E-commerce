import { Flex, ScrollArea, Box, HStack } from "@chakra-ui/react";

export default function HorizontalScrolling({ render = "" }) {
  return (
    <>
      <HStack width={"100%"}>
        <ScrollArea.Root position={"absolute"}>
          <ScrollArea.Viewport>
            <ScrollArea.Content>
              <Flex gap="4" flexWrap={"nowrap"}>
                {render}
              </Flex>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            orientation="horizontal"
            position={"relative"}
            top={"100px"}
          />
          <ScrollArea.Corner />
        </ScrollArea.Root>
      </HStack>
    </>
  );
}
