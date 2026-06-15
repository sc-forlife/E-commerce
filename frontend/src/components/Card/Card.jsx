import { Button, Card, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SpinnerComponent from "../Spinner/SpinnerComponent";
import css from "./Card.module.css";
import { CartContext } from "../../App";
import { useContext, useEffect } from "react";

export default function Display({ item = "", linkTo = "" }) {
  const { setCartProducts } = useContext(CartContext);
  const load = !item || !linkTo;

  function enterToCart() {
    sessionStorage.setItem(
      "Cart",
      JSON.stringify([
        ...JSON.parse(sessionStorage.getItem("Cart")),
        {
          id: item.id,
          title: item.title,
          price: item.price,
          thumbnail: item.thumbnail,
        },
      ]),
    );
  }

  useEffect(() => {
    if (!sessionStorage.getItem("Cart")) {
      sessionStorage.setItem("Cart", JSON.stringify([]));
    }
  }, []);

  return (
    <>
      {load ? (
        <SpinnerComponent />
      ) : (
        <>
          <Card.Root w="250px" maxH="400px" overflow="hidden">
            <Image
              src={item.thumbnail}
              alt={item.title}
              maxH={"200px"}
              margin={"10px"}
            />
            <Card.Body gap="0" p={"15px"}>
              <Link to={linkTo} className={css.link}>
                <Card.Title fontWeight={"light"} data-testid="title">
                  {item.title}
                </Card.Title>
              </Link>
              <Text
                textStyle="2x1"
                fontWeight="medium"
                letterSpacing="tight"
                mt="2"
              >
                ${item.price}
              </Text>
            </Card.Body>
            <Card.Footer>
              <Button onClick={enterToCart} w={"100%"}>
                Add to Cart
              </Button>
            </Card.Footer>
          </Card.Root>
        </>
      )}
    </>
  );
}
