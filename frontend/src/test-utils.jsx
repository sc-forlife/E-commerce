import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

function componentRender(ui) {
  return render(
    <ChakraProvider value={defaultSystem}>
      <MemoryRouter>{ui}</MemoryRouter>
    </ChakraProvider>,
  );
}

export * from "@testing-library/react";
export { componentRender as render };
