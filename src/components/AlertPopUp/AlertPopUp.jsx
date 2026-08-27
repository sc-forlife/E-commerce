import {
  Alert,
  Stack,
  Dialog,
  Portal,
  createOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function AlertPopUp({ type = "serverFail" }) {
  const errors = {
    noItem: { title: "error", value: "No item found , Try again" },
    serverFail: {
      title: "error",
      value: "Something went wrong with the server , Please try again later",
    },
    limitReached: {
      title: "info",
      value: "You have reached the maximum order quantity (per buyer)",
    },
  };

  const dialog = createOverlay((props) => {
    const { content, ...rest } = props;
    return (
      <Dialog.Root {...rest}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content h={"auto"} minW={"300px"}>
              {content}
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    );
  });

  const dialogOpen = () => {
    dialog.open("a", {
      content: (
        <Alert.Root status={errors[type].title} h="100%">
          <Alert.Indicator />
          <Alert.Title>{errors[type].value}</Alert.Title>
          {type === "limitReached" ? (
            <Button
              onClick={() => {
                dialog.close("a");
              }}
            >
              Close
            </Button>
          ) : null}
        </Alert.Root>
      ),
      closeOnEscape: false,
      closeOnInteractOutside: false,
    });
  };

  return (
    <>
      {dialogOpen()}
      <dialog.Viewport />
    </>
  );
}
