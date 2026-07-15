import {
  Button,
  ButtonGroup,
  Steps,
  Center,
  Icon,
  Flex,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";
import { createContext, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CartTable from "../../components/CartTable/CartTable";
import { LuArrowLeft, LuArrowRight, LuHouse } from "react-icons/lu";
import Receipt from "../../components/CartReceipt/CartReceipt";
import CartPayment from "../../components/CartPayment/CartPayment";
import CompleteCart from "../../components/CompleteCart/CompleteCart";

export const ReceiptContext = createContext();

export default function checkout() {
  return (
    <Steps.Root
      defaultStep={0}
      count={steps.length}
      width={"90%"}
      m={"0px auto"}
      paddingTop={"15px"}
    >
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            <Steps.Indicator />
            <Steps.Title>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
      {steps.map((step, index) => (
        <Steps.Content key={index} index={index}>
          <Center w={"90vw"} h={"85vh"}>
            <Box
              bg={"white"}
              minW={"800px"}
              maxW={"1000px"}
              h={"450px"}
              borderRadius={"20px"}
              border={"grey solid 2px"}
              overflowY={step.title === "Payment" ? "scroll" : null}
            >
              {step.description}
              <Flex justifyContent={"space-around"}>
                {step.title === "Cart" ? (
                  <Link to={"/"}>
                    <Button variant={"ghost"}>
                      <Icon as={LuHouse}></Icon>
                      Home
                    </Button>
                  </Link>
                ) : (
                  <Steps.PrevTrigger asChild>
                    <Button variant={"ghost"}>
                      <Icon as={LuArrowLeft}></Icon>
                      Back
                    </Button>
                  </Steps.PrevTrigger>
                )}
                <Steps.NextTrigger asChild>
                  <Button variant={"ghost"}>
                    Continue <Icon as={LuArrowRight}></Icon>
                  </Button>
                </Steps.NextTrigger>
              </Flex>
            </Box>
            {step.extra ? step.extra : ""}
          </Center>
        </Steps.Content>
      ))}
      <Steps.CompletedContent>
        <CompleteCart />
      </Steps.CompletedContent>
    </Steps.Root>
  );
}

// Checkout system sections
const steps = [
  {
    title: "Cart",
    description: <CartTable />,
  },
  {
    title: "Receipt",
    description: <Receipt />,
  },
  {
    title: "Payment",
    description: <CartPayment />,
  },
];
