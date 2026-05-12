import { Spinner, VStack, Text, AbsoluteCenter, Box } from "@chakra-ui/react";

export default function SpinnerComponent() {
  return (
    <>
      <Box position="relative" w={"100%"} h={"85vh"} bg="bg.muted">
        <AbsoluteCenter>
          <VStack colorPalette="teal">
            <Spinner size="lg" color="black" />
            <Text color="black">Loading...</Text>
          </VStack>
        </AbsoluteCenter>
      </Box>
    </>
  );
}
