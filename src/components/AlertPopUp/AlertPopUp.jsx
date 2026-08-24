import { Alert, Stack, Dialog, Portal, createOverlay } from "@chakra-ui/react";

export default function AlertPopUp({
  alertStatus = "error",
  alertTitle = "Error ! , Please try again later",
}) {
  const dialog = createOverlay((props) => {
    const { title, description, content, ...rest } = props;
    return (
      <Dialog.Root {...rest}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content h={"auto"} minW={"300px"}>
              <Alert.Root status={alertStatus} h="100%">
                <Alert.Indicator />
                <Alert.Title>{alertTitle}</Alert.Title>
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
