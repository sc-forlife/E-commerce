import { Flex, Spinner, VStack, Text } from "@chakra-ui/react";

export default function SpinnerComponent() {
  return (
    <>
      <Flex justify={"center"} w={"100%"} h={"85vh"} align={"center"}>
        <VStack colorPalette="teal">
          <Spinner size="lg" color="black" />
          <Text color="black">Loading...</Text>
        </VStack>
      </Flex>
    </>
  );
}
