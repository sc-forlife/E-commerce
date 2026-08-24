import { LuSearch } from "react-icons/lu";
import { IoCloudOffline } from "react-icons/io5";
import { Box, AbsoluteCenter, VStack, Text } from "@chakra-ui/react";

export default function ErrorIcon({
  msg = "Internal Server Error",
  icon = <IoCloudOffline size={80} />,
}) {
  return (
    <>
      <Box position="relative" w={"100%"} h={"85vh"}>
        <AbsoluteCenter>
          <VStack colorPalette="teal">
            {icon}
            <Text color="black">{msg}</Text>
          </VStack>
        </AbsoluteCenter>
      </Box>
    </>
  );
}
