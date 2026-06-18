import { Button, ButtonGroup, Steps, Center } from "@chakra-ui/react";
import Cart from "../../components/CartComponent/CartComponent";

export default function checkout() {
  return (
    <Steps.Root
      defaultStep={1}
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
            {step.description}
          </Center>
        </Steps.Content>
      ))}
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  );
}

const steps = [
  {
    title: "Cart",
    description: <Cart />,
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
];
