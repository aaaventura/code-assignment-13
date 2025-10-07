import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.span<{ color?: string; disabled?: boolean }>`
  color: ${({ color, disabled }) => (disabled ? '#999' : color || '#333')};
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: color 0.3s ease;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Label: React.FC<LabelProps> = ({ text, color, disabled }) => {
  return <StyledLabel color={color} disabled={disabled}>{text}</StyledLabel>;
};

export default Label;

