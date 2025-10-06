import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#007bff'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.3s ease;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, backgroundColor, disabled, onClick }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;

