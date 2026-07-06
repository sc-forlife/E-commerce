import {
  Fieldset,
  Field,
  Stack,
  Input,
  Portal,
  Select,
  Text,
  HStack,
  createListCollection,
} from "@chakra-ui/react";

export default function OnlinePayment() {
  return (
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

          <HStack>
            <Text>Card's Exp</Text>
            <Select.Root collection={frameworks} size="sm" width="100px">
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Month" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {frameworks.items.map((framework) => (
                      <Select.Item item={framework} key={framework.value}>
                        {framework.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
            {"/"}
            <Select.Root collection={frameworksYear} size="sm" width="100px">
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Year" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {frameworksYear.items.map((framework) => (
                      <Select.Item item={framework} key={framework.value}>
                        {framework.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
            <Text>CVV</Text>
            <Input
              type="text"
              placeholder="CVV"
              maxLength={3}
              name="cvvNumber"
              width={"99px"}
            />
          </HStack>
        </Fieldset.Content>
      </Fieldset.Root>
    </>
  );
}

const frameworks = createListCollection({
  items: [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
    { label: "11", value: 11 },
    { label: "12", value: 12 },
  ],
});

const frameworksYear = createListCollection({
  items: [
    { label: "2026", value: 2026 },
    { label: "2027", value: 2027 },
    { label: "2028", value: 2028 },
    { label: "2029", value: 2029 },
    { label: "2030", value: 2030 },
    { label: "2031", value: 2031 },
    { label: "2032", value: 2032 },
    { label: "2033", value: 2033 },
    { label: "2034", value: 2034 },
    { label: "2035", value: 2035 },
    { label: "2036", value: 2036 },
    { label: "2037", value: 2037 },
  ],
});
