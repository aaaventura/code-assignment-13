import React from "react";
import styled from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.bgColor || "#f0f0f0"};
  color: ${(props) => (props.disabled ? "#666666" : "#333333")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  transition: background-color 0.3s ease;

  td {
    padding: 12px;
    font-size: 16px;
    text-align: left;

    @media (max-width: 768px) {
      padding: 8px;
      font-size: 14px;
    }
  }
`;

const TableFooter: React.FC<TableFooterProps> = ({
  children = (
    <tr>
      <td>Footer</td>
    </tr>
  ),
  disabled = false,
  bgColor,
  ...props
}) => {
  return (
    <StyledTableFooter disabled={disabled} bgColor={bgColor} {...props}>
      {children}
    </StyledTableFooter>
  );
};

export default TableFooter;
