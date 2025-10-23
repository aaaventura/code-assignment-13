import React from "react";
import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

describe("HeroImage Component", () => {
  test("renders hero image and is visible", () => {
    render(
      <HeroImage src="https://via.placeholder.com/600x300" alt="Hero Image" />,
    );
    const imgElement = screen.getByAltText("Hero Image");
    expect(imgElement).toBeVisible();
  });

  test("changes background color when disabled", () => {
    render(
      <HeroImage
        src="https://via.placeholder.com/600x300"
        alt="Hero Image"
        disabled
      />,
    );
    const imgElement = screen.getByAltText("Hero Image");
    expect(imgElement).toHaveStyle("background-color: #cccccc");
  });
});
