import { Text, Center, Button, Stack, Box } from "@chakra-ui/react";
import { CartContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function CompleteCart() {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  function cartReset() {
    clearCart();
    navigate("/");
  }

  return (
    <>
      <Box w={"90vw"} h={"470px"} margin={"auto"}>
        <Stack gap={"20px"}>
          <Text textAlign={"center"}>
            Payment has been completed , Click the button below to be redirected
            to the home page
          </Text>
          <Button margin={"auto"} width={"200px"} onClick={cartReset}>
            Finish
          </Button>
        </Stack>
      </Box>
    </>
  );
}
