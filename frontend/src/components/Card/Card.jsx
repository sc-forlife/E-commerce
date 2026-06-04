import { Button, Card, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SpinnerComponent from "../Spinner/SpinnerComponent";

export default function Display({
  title = "",
  price = "",
  img = "",
  alt = "",
  linkTo = "",
}) {
  const load = !title || !price || !img || !alt || !linkTo;

  return (
    <>
      {load ? (
        <SpinnerComponent />
      ) : (
        <>
          <Card.Root maxW="250px" maxH="400px" overflow="hidden">
            <Image src={img} alt={alt} maxH={"200px"} />
            <Card.Body gap="0" p={"15px"}>
              <Link to={linkTo}>
                <Card.Title fontWeight={"light"} data-testid="title">
                  {title}
                </Card.Title>
              </Link>
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
      )}
    </>
  );
}
