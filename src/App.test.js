import App from "./App";
import React from "react";
import { render } from "@testing-library/react";

test("renders hero title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(
    /The best personal training, right in your own home/i
  );
  expect(linkElement).toBeInTheDocument();
});
