import { Alert, Stack, Dialog, Portal, createOverlay } from "@chakra-ui/react";
import { useRef } from "react";

export default function AlertPopUp({ type = "serverFail" }) {
  const errors = {
    noItem: { title: "error", value: "No item found , Try again" },
    serverFail: {
      title: "error",
      value: "Something went wrong with the server , Please try again later",
    },
  };

  const dialog = createOverlay((props) => {
    const { title, description, content, ...rest } = props;
    return (
      <Dialog.Root {...rest}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content h={"auto"} minW={"300px"}>
              <Alert.Root status={errors[type].title} h="100%">
                <Alert.Indicator />
                <Alert.Title>{errors[type].value}</Alert.Title>
              </Alert.Root>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    );
  });

  const dialogOpen = () => {
    dialog.open("a", {
      title: "Dialog Title",
      description: "Dialog Description",
    });
  };

  return (
    <>
      {dialogOpen()}
      <dialog.Viewport />
    </>
  );
}
