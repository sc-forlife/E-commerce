import {
  Button,
  ButtonGroup,
  Steps,
  Center,
  Icon,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import CartTable from "../../components/CartTable/CartTable";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Receipt from "../../components/CartReceipt/CartReceipt";

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
          <Center w={"89vw"} h={"85vh"} bg={"pink"}>
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
          </Center>
        </Steps.Content>
      ))}
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
    title: "Step 2",
    description: <Receipt />,
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
];
