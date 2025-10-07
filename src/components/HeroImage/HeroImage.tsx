import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const Container = styled.div<{ height?: string; disabled?: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '300px'};
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, overlayText, height, disabled }) => {
  return (
    <Container height={height} disabled={disabled}>
      <StyledImg src={src} alt={alt || 'Hero Image'} />
      {overlayText && <OverlayText>{overlayText}</OverlayText>}
    </Container>
  );
};

export default HeroImage;

