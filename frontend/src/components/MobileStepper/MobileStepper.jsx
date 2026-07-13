import { HStack, IconButton, NumberInput } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { CartContext } from "../../App";

export default function MobileStepper({ item = {} }) {
  const [value, setValue] = useState(1);
  const { editCart } = useContext(CartContext);

  function addCartProperties(val) {
    item["cartPrice"] = item.price * val;
    item["quantity"] = val;
    editCart({ ...item });
  }

  return (
    <NumberInput.Root
      min={1}
      value={item.quantity ? item.quantity : value}
      unstyled
      spinOnPress={false}
    >
      <HStack gap="2">
        <NumberInput.DecrementTrigger
          asChild
          onClick={() =>
            setValue((v) => {
              const newVal = v - 1;
              addCartProperties(newVal);
              return newVal;
            })
          }
        >
          <IconButton variant="outline" size="sm">
            <LuMinus />
          </IconButton>
        </NumberInput.DecrementTrigger>
        <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch" />
        <NumberInput.IncrementTrigger
          asChild
          onClick={() =>
            setValue((v) => {
              const newVal = v + 1;
              addCartProperties(newVal);
              return newVal;
            })
          }
        >
          <IconButton variant="outline" size="sm">
            <LuPlus />
          </IconButton>
        </NumberInput.IncrementTrigger>
      </HStack>
    </NumberInput.Root>
  );
}
