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
import { useState, useContext, useRef } from "react";

export default function Receipt() {
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
          justifyContent={"center"}
          flexDirection={"column"}
          gap={"50px"}
          h={"95%"}
        >
          <Heading fontSize={"15px"}>Order Summary</Heading>
          <Table.ScrollArea h={"200px"}>
            <Table.Root size="sm" stickyHeader stickyFooter>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Products</Table.ColumnHeader>
                  <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {items.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell textAlign="end">{item.price}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.Cell>Total</Table.Cell>
                  <Table.Cell textAlign="end">1000</Table.Cell>
                </Table.Row>
              </Table.Footer>
            </Table.Root>
          </Table.ScrollArea>
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
