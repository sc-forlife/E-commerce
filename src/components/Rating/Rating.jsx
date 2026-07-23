import { RatingGroup } from "@chakra-ui/react";

export default function Rating({ value = 0, size = "sm" }) {
  return (
    <>
      <RatingGroup.Root count={5} value={value} size={size} allowHalf readOnly>
        <RatingGroup.HiddenInput />
        <RatingGroup.Control />
      </RatingGroup.Root>
    </>
  );
}
