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
  useBreakpointValue,
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
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Steps.Root
      defaultStep={0}
      count={steps.length}
      width={"100%"}
      h={"100vh"}
      m={"0px auto"}
      paddingTop={"15px"}
      justifyContent={"space-between"}
    >
      <Steps.List paddingRight={"20px"} paddingLeft={"20px"}>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            <Steps.Indicator />
            {isMobile ? <></> : <Steps.Title>{step.title}</Steps.Title>}
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
      {steps.map((step, index) => (
        <Steps.Content
          key={index}
          index={index}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          h={"100vh"}
          overflowY={step.title !== "Payment" ? "scroll" : ""}
        >
          {/* <Box
          // bg={"white"}
          // // minW={"800px"}
          // width={"100%"}
          // borderRadius={"20px"}
          // // border={"grey solid 2px"}
          // overflowY={step.title === "Payment" ? "scroll" : null}
          > */}
          {step.description}
          <Flex
            justifyContent={"space-around"}
            marginTop={"15px"}
            position="fixed"
            bottom="0"
            left="0"
            bg={"white"}
            w={"100%"}
            bg={{
              base: "rgba(255, 255, 255)",
              md: "rgba(255, 255, 255, 0.6)",
            }}
          >
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
          {/* </Box> */}
          {step.extra ? step.extra : ""}
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
