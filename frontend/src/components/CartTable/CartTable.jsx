import {
  Table,
  Image,
  AspectRatio,
  Stack,
  HStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { allShopProducts } from "../../APIs/getAllProducts/getAllProducts";
import { useEffect, useState } from "react";
import { categories } from "../../data/category_data";
import MobileStepper from "../MobileStepper/MobileStepper";

export default function CartTable() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState({ id: 0, value: 1 });

  useEffect(() => {
    (async function () {
      setProducts(await allShopProducts(categories));
    })();
  }, []);

  console.log(products);

  return (
    <Table.ScrollArea h={"325px"}>
      <Table.Root size="md" striped stickyHeader>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Product</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Quantity</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Total Price</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products.map((item) => {
            if (item["cartPrice"]) {
              item["cartPrice"] =
                value.id === item.id
                  ? item.price * value.value
                  : item.cartPrice;
            } else {
              item["cartPrice"] =
                value.id === item.id ? item.price * value.value : item.price;
            }

            return (
              <Table.Row key={item.id}>
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
                    <MobileStepper quantity={setValue} id={item.id} />
                  </Flex>
                </Table.Cell>
                <Table.Cell textAlign="end">
                  {item.cartPrice.toFixed(2)}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
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
