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
import { createContext, useState, useEffect } from "react";
import CartTable from "../../components/CartTable/CartTable";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Receipt from "../../components/CartReceipt/CartReceipt";

export const ReceiptContext = createContext();

export default function checkout() {
  const [receiptData, setReceiptData] = useState({ quantity: 0, cartPrice: 0 });

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

      <ReceiptContext.Provider value={{ receiptData, setReceiptData }}>
        {steps.map((step, index) => (
          <Steps.Content key={index} index={index}>
            <Center w={"90vw"} h={"85vh"} bg={"pink"}>
              <Box bg={"white"} w={"800px"} h={"450px"} borderRadius={"20px"}>
                {step.description}
                <Flex justifyContent={"space-around"}>
                  <Steps.PrevTrigger asChild>
                    <Button variant={"ghost"}>
                      <Icon>
                        <LuArrowLeft />
                      </Icon>
                      Back to Store
                    </Button>
                  </Steps.PrevTrigger>
                  <Steps.NextTrigger asChild>
                    <Button variant={"ghost"}>
                      Continue{" "}
                      <Icon>
                        <LuArrowRight />
                      </Icon>
                    </Button>
                  </Steps.NextTrigger>
                </Flex>
              </Box>
              {step.extra ? step.extra : ""}
            </Center>
          </Steps.Content>
        ))}
      </ReceiptContext.Provider>
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>
    </Steps.Root>
  );
}

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
    title: "Step 3",
    description: "Step 3 description",
  },
];
