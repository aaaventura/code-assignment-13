import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  background-color: ${props => (props.disabled ? '#cccccc' : props.bgColor || '#ffffff')};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.7 : 1)};
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    padding: 12px;
    max-width: 250px;
  }
`;

const Card: React.FC<CardProps> = ({ children = 'Card Content', disabled = false, bgColor, ...props }) => {
  return (
    <StyledCard disabled={disabled} bgColor={bgColor} {...props}>
      {children}
    </StyledCard>
  );
};

export default Card;
