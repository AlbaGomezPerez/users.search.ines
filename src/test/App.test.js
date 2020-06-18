import React from "react";
import App from "./../App";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

/**
 * Check content from Header, Footer and Home
 */

test("Render footer and home components", () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const image = container.querySelector(".brand-logo");
  const header = container.querySelector("header");

  expect(image).not.toBe(null);
  expect(header).not.toBe(null);

  const footerText = container.querySelector(".grey-text");
  const footer = container.querySelector("footer");

  expect(footerText.textContent).toBe(
    "You can read more about all our users and their work"
  );
  expect(footer).not.toBe(null);

  const home = container.querySelector(".home");

  expect(home).not.toBe(null);
});
