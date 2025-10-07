import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTr = styled.tr<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#fff'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.3s ease;
`;

const StyledTd = styled.td`
  padding: 10px;
  border: 1px solid #ddd;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const TableRow: React.FC<TableRowProps> = ({ cells, backgroundColor, disabled }) => {
  return (
    <StyledTr backgroundColor={backgroundColor} disabled={disabled}>
      {cells.map((cell, index) => (
        <StyledTd key={index}>{cell}</StyledTd>
      ))}
    </StyledTr>
  );
};

export default TableRow;

