import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.img<HeroImageProps>`
  width: 100%;
  max-width: 600px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${props => (props.disabled ? '#cccccc' : props.bgColor || 'transparent')};
  opacity: ${props => (props.disabled ? 0.7 : 1)};
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    height: 200px;
    max-width: 100%;
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({ src = 'https://via.placeholder.com/600x300', alt = 'Hero Image', disabled = false, bgColor, ...props }) => {
  return (
    <StyledHeroImage src={src} alt={alt} disabled={disabled} bgColor={bgColor} {...props} />
  );
};

export default HeroImage;
