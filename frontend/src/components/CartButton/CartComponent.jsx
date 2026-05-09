import { Float, Circle, Box, Icon } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";

export default function CartComponent() {
  return (
    <>
      <Box position={"relative"}>
        <Icon>
          <FaCartPlus style={{ width: "40px" }} />
        </Icon>
        <Float>
          <Circle size="5" bg="red" color="white">
            0
          </Circle>
        </Float>
      </Box>
    </>
  );
}
