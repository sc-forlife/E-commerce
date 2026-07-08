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
import { LuX } from "react-icons/lu";
import CartTableHeading from "../CartTableHeading/CartTableHeading";
import { allShopProducts } from "../../APIs/getAllProducts/getAllProducts";
import { useEffect, useState, useContext } from "react";
import { categories } from "../../data/category_data";
import MobileStepper from "../MobileStepper/MobileStepper";
import { CartContext } from "../../App";
import { ReceiptContext } from "../../pages/checkout_sys/Checkout_sys";
import Receipt from "../CartReceipt/CartReceipt";

export default function CartTable() {
  const { receiptData, setReceiptData } = useContext(ReceiptContext);
  const { cartProducts, deleteCartItem } = useContext(CartContext);
  // const [cartProducts, setCartProducts] = useState();

  useEffect(() => {
    // const data = JSON.parse(sessionStorage.getItem("Cart"));
    // setCartProducts(data);
  }, []);

  useEffect(() => {
    if (cartProducts) {
      // updateReceipt();
    }
  }, [cartProducts]);

  // function updateReceipt() {
  //   let quantity = 0;
  //   let cartPrice = 0;
  //   const data = JSON.parse(sessionStorage.getItem("Cart"));
  //   for (const item of data) {
  //     if (item.cartPrice) {
  //       cartPrice += item.cartPrice;
  //     }
  //     if (item.quantity) {
  //       quantity += item.quantity;
  //     }
  //   }

  //   setReceiptData({ quantity: quantity, cartPrice: cartPrice.toFixed(2) });
  // }
  return (
    <>
      <CartTableHeading itemNumber={receiptData ? receiptData.quantity : ""} />
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
                    <Table.Cell>{item.price}</Table.Cell>
                    <Table.Cell>
                      <Flex justifyContent={"center"}>
                        <MobileStepper item={item} />
                      </Flex>
                    </Table.Cell>
                    <Table.Cell textAlign="end">
                      {item.cartPrice.toFixed(2)}
                    </Table.Cell>
                    <Table.Cell textAlign="end">
                      <Icon
                        as={LuX}
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

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
];
