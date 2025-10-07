import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTfoot = styled.tfoot<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#f5f5f5'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const StyledTd = styled.td`
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border-top: 1px solid #ddd;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const TableFooter: React.FC<TableFooterProps> = ({ content, backgroundColor, disabled }) => {
  return (
    <StyledTfoot backgroundColor={backgroundColor} disabled={disabled}>
      <tr>
        <StyledTd colSpan={100}>{content}</StyledTd>
      </tr>
    </StyledTfoot>
  );
};

export default TableFooter;

