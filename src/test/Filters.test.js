import React from "react";
import { render } from "@testing-library/react";
import Filters from "./../components/Filters";

/**
 * Check content from Filters, an input
 */
test("Filters component render input text", () => {
  const { container } = render(<Filters />);
  const searchInput = container.querySelector("#search");

  expect(searchInput).not.toBe(null);
});
