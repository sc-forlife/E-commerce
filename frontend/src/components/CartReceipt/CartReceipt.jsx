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

export default function Receipt() {
  const [cartData, setCartData] = useState("");
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("Cart"));
    setCartData(data);
  }, []);

  return (
    <>
      <Box
        bg={"bg.muted"}
        h={"370px"}
        w={"50%"}
        margin={"20px auto 10px"}
        borderRadius={"10px"}
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
          gap={"10px"}
          h={"95%"}
        >
          <Heading fontSize={"15px"} marginTop={"10px"}>
            Order Summary
          </Heading>
          <Table.Root size="sm" stickyHeader stickyFooter>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Price Details</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end"></Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row key="item-prices">
                <Table.Cell>
                  Items{" "}
                  {`(${
                    cartData
                      ? cartData.reduce((acc, currentVal) => {
                          return currentVal.quantity + acc;
                        }, 0)
                      : ""
                  })`}
                </Table.Cell>
                <Table.Cell textAlign="end">1000</Table.Cell>
              </Table.Row>
              <Table.Row key="item-discount">
                <Table.Cell>Discount</Table.Cell>
                <Table.Cell textAlign="end">1000</Table.Cell>
              </Table.Row>
              <Table.Row key="item-discount">
                <Table.Cell>VAT</Table.Cell>
                <Table.Cell textAlign="end">1000</Table.Cell>
              </Table.Row>
              <Table.Row key="item-shipping">
                <Table.Cell>Shipping</Table.Cell>
                <Table.Cell textAlign="end">Free</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.Cell>Total</Table.Cell>
                <Table.Cell textAlign="end">1000</Table.Cell>
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
