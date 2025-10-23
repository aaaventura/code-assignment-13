import React from "react";
import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";

describe("TableHeader Component", () => {
  test("renders table header and is visible", () => {
    render(
      <table>
        <TableHeader>
          <tr>
            <th>Header</th>
          </tr>
        </TableHeader>
      </table>,
    );
    const headerElement = screen.getByRole("columnheader", { name: /Header/i });
    expect(headerElement).toBeVisible();
  });

  test("changes background color when disabled", () => {
    const { container } = render(
      <table>
        <TableHeader disabled>
          <tr>
            <th>Header</th>
          </tr>
        </TableHeader>
      </table>,
    );
    const theadElement = container.querySelector("thead");
    expect(theadElement).toHaveStyle("background-color: #cccccc");
  });
});
