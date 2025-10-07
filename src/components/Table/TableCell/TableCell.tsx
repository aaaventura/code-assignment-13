import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTd = styled.td<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#fff'};
  padding: 10px;
  border: 1px solid #ddd;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.3s ease;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const TableCell: React.FC<TableCellProps> = ({ content, backgroundColor, disabled }) => {
  return <StyledTd backgroundColor={backgroundColor} disabled={disabled}>{content}</StyledTd>;
};

export default TableCell;

