import { HStack, IconButton, NumberInput } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

export default function MobileStepper({ quantity = function () {}, id = 0 }) {
  const [value, setValue] = useState(1);

  useEffect(() => {
    quantity({ id: id, value: value });
  }, [value]);

  return (
    <NumberInput.Root min={1} value={value} unstyled spinOnPress={false}>
      <HStack gap="2">
        <NumberInput.DecrementTrigger
          asChild
          onClick={() => setValue((v) => v - 1)}
        >
          <IconButton variant="outline" size="sm">
            <LuMinus />
          </IconButton>
        </NumberInput.DecrementTrigger>
        <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch" />
        <NumberInput.IncrementTrigger
          asChild
          onClick={() => setValue((v) => v + 1)}
        >
          <IconButton variant="outline" size="sm">
            <LuPlus />
          </IconButton>
        </NumberInput.IncrementTrigger>
      </HStack>
    </NumberInput.Root>
  );
}
