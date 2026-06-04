import Display from "./Card";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { describe, it, expect } from "vitest";
import { defaultSystem } from "@chakra-ui/react";
import { MemoryRouter } from "react-router-dom";

describe("Display Card", () => {
  it("Card displays the correct data from arguements", () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <MemoryRouter>
          <Display
            title="The dress"
            price="100"
            img="http://image.com"
            alt="Its an image"
          />
        </MemoryRouter>
      </ChakraProvider>,
    );
    expect(screen.getByText("The dress")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByAltText("Its an image")).toBeInTheDocument();
  });
});

//create a test-utils.jsx file
