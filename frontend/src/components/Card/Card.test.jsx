import Display from "./Card";
import "@testing-library/jest-dom/vitest";
import { render, screen, cleanup } from "../../test-utils";
import { ChakraProvider } from "@chakra-ui/react";
import { describe, it, expect, afterEach } from "vitest";
import { defaultSystem } from "@chakra-ui/react";
import { MemoryRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

describe("Display Card", () => {
  it("Card displays the correct data from arguements", () => {
    render(
      <Display
        title="The dress"
        price="100"
        img="http://image.com"
        alt="Its an image"
        linkTo="/ViewProduct/"
      />,
    );
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByAltText("Its an image")).toBeInTheDocument();
  });
  it("Card loads when one props is not provided", () => {
    render(<Display title="The dress" price="100" />);
    screen.debug();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
