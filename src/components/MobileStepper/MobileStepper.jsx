import { HStack, IconButton, NumberInput } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { CartContext } from "../../App";
import AlertPopUp from "../AlertPopUp/AlertPopUp";

export default function MobileStepper({ item = {} }) {
  const [value, setValue] = useState(item.quantity);
  const { editCart } = useContext(CartContext);
  const [alert, setAlert] = useState({ bool: false, type: "" });

  //Add selected cart price and qunatity to cart item
  function addCartProperties(val) {
    item["cartPrice"] = item.price * val;
    item["quantity"] = val;
    editCart({ ...item });
  }

  function checkValue(newValue) {
    if (newValue === 5 || item.stock === newValue) {
      setAlert({ bool: true, type: "limitReached" });
    } else {
      setAlert({ bool: false, type: "" });
    }
  }

  return (
    <>
      {alert.bool ? <AlertPopUp type={alert.type} /> : null}
      <NumberInput.Root
        min={1}
        max={item.stock > 5 ? 5 : item.stock}
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
                checkValue(newVal);
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
                checkValue(newVal);
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
    </>
  );
}
