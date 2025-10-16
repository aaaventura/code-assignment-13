import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<TableCellProps>`
  padding: 12px;
  font-size: 16px;
  background-color: ${props => (props.disabled ? '#cccccc' : props.bgColor || '#ffffff')};
  color: ${props => (props.disabled ? '#666666' : '#333333')};
  opacity: ${props => (props.disabled ? 0.7 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

const TableCell: React.FC<TableCellProps> = ({ children = 'Cell Content', disabled = false, bgColor, ...props }) => {
  return (
    <StyledTableCell disabled={disabled} bgColor={bgColor} {...props}>
      {children}
    </StyledTableCell>
  );
};

export default TableCell;
