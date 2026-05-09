import { storeProducts } from "../../hooks/products";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ProductsContext } from "../../App";
import { useContext } from "react";

export default function Display({
  title = "",
  price = "",
  img = "",
  alt = "",
}) {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <Card.Root maxW="250px" maxH="400px" overflow="hidden">
        <Image src={img} alt={alt} maxH={"200px"} />
        <Card.Body gap="0" p={"15px"}>
          <Card.Title fontWeight={"light"}>{title}</Card.Title>
          <Text
            textStyle="2x1"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            {price}
          </Text>
        </Card.Body>
        <Card.Footer>
          <Button w={"100%"}>Add to Cart</Button>
        </Card.Footer>
      </Card.Root>
    </>
  );
}
