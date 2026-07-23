import {
  Button,
  ButtonGroup,
  Steps,
  Center,
  Icon,
  Flex,
  Box,
  Text,
  Table,
  Heading,
} from "@chakra-ui/react";
import { useState, useContext, useRef, useEffect } from "react";
import { CartContext } from "../../App";

export default function Receipt() {
  const { cartProducts } = useContext(CartContext);

  const [totalPrices, setTotalPrices] = useState("");
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");
  const [shipping, setShipping] = useState("");
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    //get total number of quantity and prices
    if (cartProducts) {
      let totalPrice = 0;
      let quantity = 0;
      cartProducts.forEach((item) => {
        totalPrice += item.cartPrice;
        quantity += item.quantity;
      });
      updateData(totalPrice);
      setQuantity(quantity);
    }
  }, [cartProducts]);

  //processing data into receipt prices
  function updateData(cartPrice) {
    setTotalPrices(cartPrice.toFixed(2));
    setDiscount(((10 / 100) * cartPrice).toFixed(2));
    setTax(((12 / 100) * cartPrice).toFixed(2));
    setShipping(((15 / 100) * cartPrice).toFixed(2));
  }

  return (
    <>
      <Box
        bg={"bg.muted"}
        h={"370px"}
        w={"50%"}
        margin={"20px auto 10px"}
        borderRadius={"10px"}
        borderWidth={"2px"}
        borderColor={"black"}
      >
        <Box
          h={"10px"}
          bg={"black"}
          borderTopRadius={"10px"}
          width={"100%"}
        ></Box>
        <Flex
          justifyContent={"flex-start"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"25px"}
          h={"95%"}
        >
          <Heading fontSize={"15px"} marginTop={"25px"} width={"100%"}>
            <Flex justifyContent={"center"}>Order Summary</Flex>
          </Heading>
          <Table.Root size="md" stickyHeader striped>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Price Details</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end"></Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row key="item-prices">
                <Table.Cell>
                  Items
                  {`(${quantity ? quantity : ""})`}
                </Table.Cell>
                <Table.Cell textAlign="end">{totalPrices} $</Table.Cell>
              </Table.Row>
              <Table.Row key="item-discount">
                <Table.Cell>Discount</Table.Cell>
                <Table.Cell textAlign="end">{discount} $</Table.Cell>
              </Table.Row>
              <Table.Row key="item-tax">
                <Table.Cell>VAT</Table.Cell>
                <Table.Cell textAlign="end">{tax} $</Table.Cell>
              </Table.Row>
              <Table.Row key="item-shipping">
                <Table.Cell>Shipping</Table.Cell>
                <Table.Cell textAlign="end">{shipping} $</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.Cell>Total</Table.Cell>
                <Table.Cell textAlign="end">
                  {shipping
                    ? (
                        Number(totalPrices) +
                        Number(tax) +
                        Number(shipping) -
                        Number(discount)
                      ).toFixed(2)
                    : ""}{" "}
                  $
                </Table.Cell>
              </Table.Row>
            </Table.Footer>
          </Table.Root>
        </Flex>
        <Box
          h={"10px"}
          bg={"black"}
          borderBottomRadius={"10px"}
          width={"100%"}
        ></Box>
      </Box>
    </>
  );
}
