import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import TableFooter from '../TableFooter';

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const Table: React.FC<TableProps> = ({ headers, rows, footer, backgroundColor, disabled }) => {
  return (
    <StyledTable disabled={disabled}>
      <TableHeader headers={headers} backgroundColor={backgroundColor} disabled={disabled} />
      <tbody>
        {rows.map((row, index) => (
          <TableRow key={index} cells={row} backgroundColor={backgroundColor} disabled={disabled} />
        ))}
      </tbody>
      {footer && (
        <TableFooter content={footer} backgroundColor={backgroundColor} disabled={disabled} />
      )}
    </StyledTable>
  );
};

export default Table;

