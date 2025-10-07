import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#fff'};
  color: #333;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.3s ease;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onChange,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledSelect
      value={selected}
      onChange={(e) => onChange?.(e.target.value)}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;

