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
import Tab from "@mui/material/Tab";
import { useState, useContext, useRef, useEffect } from "react";
import { CartContext } from "../../App";
import { ReceiptContext } from "../../pages/checkout_sys/Checkout_sys";

export default function Receipt() {
  const { receiptData, setReceiptData } = useContext(ReceiptContext);

  const [totalPrices, setTotalPrices] = useState("");
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");
  const [shipping, setShipping] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    if (receiptData) {
      updateData(receiptData);
    }
  }, [receiptData]);

  function totalNumber(data, prop) {
    const totalNum = data.reduce((acc, currVal) => {
      return currVal[`${prop}`] + acc;
    }, 0);

    return totalNum;
  }

  function updateData(data) {
    setTotalPrices(data.cartPrice);
    setDiscount(((30 / 100) * data.cartPrice).toFixed(2));
    setTax(((10 / 100) * data.cartPrice).toFixed(2));
    setShipping(((12 / 100) * data.cartPrice).toFixed(2));
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
                  {`(${receiptData ? receiptData.quantity : ""})`}
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

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
];
