import { Alert, Stack, Dialog, Portal, createOverlay } from "@chakra-ui/react";

export default function AlertPopUp({
  status = "error",
  title = "Error ! , PLease try again later",
}) {
  const dialog = createOverlay((props) => {
    const { title, description, content, ...rest } = props;
    return (
      <Dialog.Root {...rest}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content h={"400px"} minW={"300px"}>
              <Alert.Root status={status}>
                <Alert.Indicator />
                <Alert.Title>{title}</Alert.Title>
              </Alert.Root>
              <Dialog.Body spaceY="4"></Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    );
  });

  return <dialog.Viewport />;
}
