import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("renders button and is visible", () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeVisible();
  });

  test("changes background color when disabled", () => {
    render(<Button label="Click Me" disabled />);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toHaveStyle("background-color: #cccccc");
  });
});
