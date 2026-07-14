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
import { useEffect, useState } from "react";

export default function OnlinePayment() {
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  useEffect(() => {
    //Create list collection for month and year values and labels

    let monthList = [];
    for (let i = 1; i < 13; i++) {
      monthList.push({ label: `${i}`, value: i });
    }
    setMonth(createListCollection({ items: monthList }));

    let yearList = [];
    const date = new Date().getFullYear();
    for (let i = date; i < date + 10; i++) {
      yearList.push({ label: `${i}`, value: i });
    }
    setYear(createListCollection({ items: yearList }));
  }, []);

  return (
    <>
      <Fieldset.Root size="lg" w="400px" margin={"30px 30px"}>
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
            <Select.Root collection={month} size="sm" width="100px">
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
                    {month
                      ? month.items.map((framework) => (
                          <Select.Item item={framework} key={framework.value}>
                            {framework.value}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))
                      : null}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
            {"/"}
            <Select.Root collection={year} size="sm" width="100px">
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
                    {year
                      ? year.items.map((framework) => (
                          <Select.Item item={framework} key={framework.value}>
                            {framework.value}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))
                      : null}
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
