import React from "react";
import { render, screen } from "@testing-library/react";
import TableFooter from "./TableFooter";

describe("TableFooter Component", () => {
  test("renders table footer and is visible", () => {
    render(
      <table>
        <TableFooter>
          <tr>
            <td>Footer</td>
          </tr>
        </TableFooter>
      </table>,
    );
    const footerElement = screen.getByText("Footer");
    expect(footerElement).toBeVisible();
  });

  test("changes background color when disabled", () => {
    const { container } = render(
      <table>
        <TableFooter disabled>
          <tr>
            <td>Footer</td>
          </tr>
        </TableFooter>
      </table>,
    );
    const tfootElement = container.querySelector("tfoot");
    expect(tfootElement).toHaveStyle("background-color: #cccccc");
  });
});
