import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Stack,
  HStack,
  RadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";

export default function CartPayment() {
  const [displayBankCard, setDisplayBankCard] = useState(false);

  return (
    <Fieldset.Root size="lg" maxW="md" margin={"30px 30px"}>
      <Stack>
        <Fieldset.Legend>Contact details</Fieldset.Legend>
        <Fieldset.HelperText>
          Please provide your contact details below.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Input name="name" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Email address</Field.Label>
          <Input name="email" type="email" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Contact</Field.Label>
          <Input name="contact" type="text" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Address</Field.Label>
          <Input name="address" type="text" />
        </Field.Root>
      </Fieldset.Content>

      <Stack>
        <Fieldset.Legend>Payment Method</Fieldset.Legend>
        <RadioGroup.Root
          defaultValue="1"
          onValueChange={() => setDisplayBankCard((t) => (t = !t))}
        >
          <HStack gap="6">
            {items.map((item) => (
              <RadioGroup.Item key={item.value} value={item.value}>
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
            {console.log()}
          </HStack>
        </RadioGroup.Root>
      </Stack>

      {displayBankCard ? (
        <>
          <Fieldset.Root size="lg" maxW="md">
            <Stack>
              <Fieldset.Legend>Card details</Fieldset.Legend>
              <Fieldset.HelperText>
                Please provide your card details below.
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field.Root>
                <Field.Label>Card Holder's Name</Field.Label>
                <Input name="name" />
              </Field.Root>

              <Field.Root>
                <Field.Label>Card Number</Field.Label>
                <Input name="email" type="email" />
              </Field.Root>

              <Field.Root>
                <Field.Label>EXP</Field.Label>
                <Input name="email" type="email" />
              </Field.Root>
            </Fieldset.Content>
          </Fieldset.Root>
        </>
      ) : (
        ""
      )}

      <Button type="submit" alignSelf="flex-start">
        Submit
      </Button>
    </Fieldset.Root>
  );
}

const items = [
  { label: "Cash on delivery", value: "1" },
  { label: "Online Payment", value: "2" },
];
