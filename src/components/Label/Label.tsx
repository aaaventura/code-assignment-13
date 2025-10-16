import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  display: block;
  font-size: 16px;
  color: ${props => (props.disabled ? '#666666' : '#333333')};
  background-color: ${props => (props.disabled ? '#cccccc' : props.bgColor || '#ffffff')};
  padding: 8px 12px;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${props => (props.disabled ? 0.7 : 1)};
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 200px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 10px;
    max-width: 150px;
  }
`;

const Label: React.FC<LabelProps> = ({ text = 'Label', disabled = false, bgColor, ...props }) => {
  return (
    <StyledLabel disabled={disabled} bgColor={bgColor} {...props}>
      {text}
    </StyledLabel>
  );
};

export default Label;
