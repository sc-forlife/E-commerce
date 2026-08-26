import { LuSearch } from "react-icons/lu";
import { IoCloudOffline } from "react-icons/io5";
import { FaDropbox } from "react-icons/fa6";
import { Box, AbsoluteCenter, VStack, Text } from "@chakra-ui/react";
import { useRef } from "react";

export default function ErrorIcon({ type = "serverFail" }) {
  const error = {
    serverFail: {
      msg: "Internal Server Error",
      icon: <IoCloudOffline size={80} />,
    },
    noItem: {
      msg: "No items found",
      icon: <FaDropbox size={80} />,
    },
  };

  return (
    <>
      <Box position="relative" w={"100%"} h={"85vh"}>
        <AbsoluteCenter>
          <VStack colorPalette="teal">
            {error[type].icon}
            <Text color="black">{error[type].msg}</Text>
          </VStack>
        </AbsoluteCenter>
      </Box>
    </>
  );
}
