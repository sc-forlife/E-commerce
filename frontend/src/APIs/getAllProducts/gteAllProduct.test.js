import { describe, expect, it, afterEach, beforeEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { allShopProducts } from "./getAllProducts";
import * as categoryFunction from "../getCategory/getCategory";

describe("Get All Products", () => {
  it("Returns all the API products", async () => {
    vi.spyOn(categoryFunction, "getCategory").mockResolvedValue([
      { items: "" },
      { items: "" },
      { items: "" },
    ]);
    const products = await allShopProducts();

    //test for a nested structure array
    expect(products).toEqual([
      expect.arrayContaining([{ items: "" }, { items: "" }, { items: "" }]),
    ]);
  });
});
