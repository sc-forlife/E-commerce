import { describe, expect, it, afterEach, beforeEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { allShopProducts } from "./getAllProducts";
import * as categoryFunction from "../getCategory/getCategory";
import { categories } from "../../data/category_data";

describe("Get All Products", () => {
  it("Returns all the API products", async () => {
    vi.spyOn(categoryFunction, "getCategory").mockResolvedValueOnce([
      { items: "" },
      { items: "" },
      { items: "" },
    ]);
    const products = await allShopProducts(["beauty"]);

    //test for a nested structure array
    expect(products).toEqual([
      expect.arrayContaining([{ items: "" }, { items: "" }, { items: "" }]),
    ]);
  });
  it("Missing parameter throws an error", async () => {
    await expect(allShopProducts()).rejects.throw(
      "Invalid parameter `categories",
    );
  });
});
