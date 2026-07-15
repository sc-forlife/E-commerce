import {
  Table,
  Image,
  AspectRatio,
  Stack,
  HStack,
  Text,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { LuX, LuDelete, LuTrash } from "react-icons/lu";
import CartTableHeading from "../CartTableHeading/CartTableHeading";
import { useContext } from "react";
import MobileStepper from "../MobileStepper/MobileStepper";
import { CartContext } from "../../App";

export default function CartTable() {
  const { cartProducts, deleteCartItem } = useContext(CartContext);

  return (
    <>
      <CartTableHeading />
      <Table.ScrollArea h={"315px"} marginBottom={"7px"}>
        <Table.Root size="md" striped stickyHeader>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Product</Table.ColumnHeader>
              <Table.ColumnHeader>Price</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="center">
                Quantity
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">
                Total Price
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end"></Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {cartProducts ? (
              cartProducts.map((item) => {
                return (
                  <Table.Row key={item.cartId}>
                    <Table.Cell>
                      <HStack>
                        <AspectRatio ratio={1 / 1} w="70px">
                          <Image src={item.thumbnail} alt={item.title}></Image>
                        </AspectRatio>
                        <Stack>
                          <Text>{item.title}</Text>
                        </Stack>
                      </HStack>
                    </Table.Cell>
                    <Table.Cell>${item.price}</Table.Cell>
                    <Table.Cell>
                      <Flex justifyContent={"center"}>
                        <MobileStepper item={item} />
                      </Flex>
                    </Table.Cell>
                    <Table.Cell textAlign="end">
                      ${item.cartPrice.toFixed(2)}
                    </Table.Cell>
                    <Table.Cell textAlign="end">
                      <Icon
                        as={LuTrash}
                        size={"md"}
                        bg={{
                          base: "colorPalette.100",
                          _hover: "colorPalette.200",
                        }}
                        onClick={() => deleteCartItem(item.cartId)}
                      ></Icon>
                    </Table.Cell>
                  </Table.Row>
                );
              })
            ) : (
              <>
                <Table.Row>
                  <Table.Cell colSpan={5} textAlign="center">
                    Loading
                  </Table.Cell>
                </Table.Row>
              </>
            )}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
    </>
  );
}
