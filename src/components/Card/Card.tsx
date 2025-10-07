import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const Container = styled.div<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#fff'};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: background-color 0.3s ease;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 6px;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 20px;
`;

const Content = styled.p`
  margin: 0;
  font-size: 16px;
`;

const Card: React.FC<CardProps> = ({ title, content, imageSrc, backgroundColor, disabled }) => {
  return (
    <Container backgroundColor={backgroundColor} disabled={disabled}>
      {imageSrc && <Image src={imageSrc} alt={title || 'Card image'} />}
      {title && <Title>{title}</Title>}
      {content && <Content>{content}</Content>}
    </Container>
  );
};

export default Card;

