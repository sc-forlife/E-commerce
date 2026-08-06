import { Button, Card, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SpinnerComponent from "../Spinner/SpinnerComponent";
import css from "./Card.module.css";
import { CartContext } from "../../App";
import { useContext, useEffect } from "react";

export default function Display({ item = "", linkTo = "" }) {
  //check if any of the variables is falsy
  const load = !item || !linkTo;

  return (
    <>
      {load ? (
        <SpinnerComponent />
      ) : (
        <>
          <Card.Root
            w={{ base: "150px", md: "250px" }}
            h={{ base: "auto", md: "380px" }}
            overflow="hidden"
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              maxW={{ base: "150px", md: "200px" }}
              margin={"10px"}
            />
            <Card.Body gap="0" p={{ md: "15px", base: "10px" }}>
              <Card.Title
                fontSize={{
                  base: "12px",
                  md: "17px",
                }}
                fontWeight={"light"}
                data-testid="title"
              >
                {item.title}
              </Card.Title>

              <Text
                textStyle="2x1"
                fontWeight="medium"
                letterSpacing="tight"
                mt="2"
              >
                ${item.price}
              </Text>
            </Card.Body>
            <Link to={linkTo} className={css.link}>
              <Card.Footer p={{ md: "25px", base: "5px" }}>
                <Button w={"100%"} h={{ base: "30px", md: "35px" }}>
                  View Product
                </Button>
              </Card.Footer>
            </Link>
          </Card.Root>
        </>
      )}
    </>
  );
}
