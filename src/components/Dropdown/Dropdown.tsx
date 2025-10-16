import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledDropdown = styled.select<DropdownProps>`
  padding: 12px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${props => (props.disabled ? '#cccccc' : props.bgColor || '#ffffff')};
  color: ${props => (props.disabled ? '#666666' : '#333333')};
  opacity: ${props => (props.disabled ? 0.7 : 1)};
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 200px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
    max-width: 150px;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ children = <option>Option</option>, disabled = false, bgColor, ...props }) => {
  return (
    <StyledDropdown disabled={disabled} bgColor={bgColor} {...props}>
      {children}
    </StyledDropdown>
  );
};

export default Dropdown;
