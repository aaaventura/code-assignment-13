import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ fontSize?: string; color?: string; disabled?: boolean }>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ color, disabled }) => (disabled ? '#999' : color || '#333')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: color 0.3s ease;

  @media (max-width: 600px) {
    font-size: ${({ fontSize }) => fontSize || '14px'};
  }
`;

const Text: React.FC<TextProps> = ({ content, fontSize, color, disabled }) => {
  return <StyledText fontSize={fontSize} color={color} disabled={disabled}>{content}</StyledText>;
};

export default Text;

