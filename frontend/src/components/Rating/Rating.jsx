import { RatingGroup } from "@chakra-ui/react";

export default function Rating({ value = 0 }) {
  return (
    <>
      <RatingGroup.Root count={5} value={value} size="sm" allowHalf readOnly>
        <RatingGroup.HiddenInput />
        <RatingGroup.Control />
      </RatingGroup.Root>
    </>
  );
}
