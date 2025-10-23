import React from "react";
import { render, screen } from "@testing-library/react";
import Img from "./Img";

describe("Img Component", () => {
  test("renders img and is visible", () => {
    render(<Img src="https://via.placeholder.com/200" alt="Image" />);
    const imgElement = screen.getByAltText("Image");
    expect(imgElement).toBeVisible();
  });

  test("changes background color when disabled", () => {
    render(<Img src="https://via.placeholder.com/200" alt="Image" disabled />);
    const imgElement = screen.getByAltText("Image");
    expect(imgElement).toHaveStyle("background-color: #cccccc");
  });
});
