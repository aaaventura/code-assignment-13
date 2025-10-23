import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<TableProps>`
  width: 100%;
  max-width: 800px;
  border-collapse: collapse;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.bgColor || "#ffffff"};
  color: ${(props) => (props.disabled ? "#666666" : "#333333")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 14px;
  }
`;

const Table: React.FC<TableProps> = ({
  children,
  disabled = false,
  bgColor,
  ...props
}) => {
  return (
    <StyledTable disabled={disabled} bgColor={bgColor} {...props}>
      {children}
    </StyledTable>
  );
};

export default Table;
