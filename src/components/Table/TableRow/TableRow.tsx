import React from "react";
import styled from "styled-components";
import { TableRowProps } from "./TableRow.types";

const StyledTableRow = styled.tr<TableRowProps>`
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.bgColor || "#ffffff"};
  color: ${(props) => (props.disabled ? "#666666" : "#333333")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  transition: background-color 0.3s ease;

  td {
    padding: 12px;
    font-size: 16px;

    @media (max-width: 768px) {
      padding: 8px;
      font-size: 14px;
    }
  }
`;

const TableRow: React.FC<TableRowProps> = ({
  children = <td>Cell</td>,
  disabled = false,
  bgColor,
  ...props
}) => {
  return (
    <StyledTableRow disabled={disabled} bgColor={bgColor} {...props}>
      {children}
    </StyledTableRow>
  );
};

export default TableRow;
