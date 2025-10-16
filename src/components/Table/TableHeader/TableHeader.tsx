import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTableHeader = styled.thead<TableHeaderProps>`
  background-color: ${props => (props.disabled ? '#cccccc' : props.bgColor || '#f0f0f0')};
  color: ${props => (props.disabled ? '#666666' : '#333333')};
  opacity: ${props => (props.disabled ? 0.7 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  transition: background-color 0.3s ease;

  th {
    padding: 12px;
    font-size: 16px;
    text-align: left;

    @media (max-width: 768px) {
      padding: 8px;
      font-size: 14px;
    }
  }
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children = <tr><th>Header</th></tr>, disabled = false, bgColor, ...props }) => {
  return (
    <StyledTableHeader disabled={disabled} bgColor={bgColor} {...props}>
      {children}
    </StyledTableHeader>
  );
};

export default TableHeader;
