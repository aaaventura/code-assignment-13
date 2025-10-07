import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledThead = styled.thead<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#f5f5f5'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const StyledTh = styled.th`
  padding: 10px;
  text-align: left;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const TableHeader: React.FC<TableHeaderProps> = ({ headers, backgroundColor, disabled }) => {
  return (
    <StyledThead backgroundColor={backgroundColor} disabled={disabled}>
      <tr>
        {headers.map((header, index) => (
          <StyledTh key={index}>{header}</StyledTh>
        ))}
      </tr>
    </StyledThead>
  );
};

export default TableHeader;

