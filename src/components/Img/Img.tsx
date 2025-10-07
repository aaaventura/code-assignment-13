import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ disabled?: boolean }>`
  display: block;
  max-width: 100%;
  height: auto;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: opacity 0.3s ease;
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return (
    <StyledImg
      src={src}
      alt={alt || 'image'}
      width={width}
      height={height}
      disabled={disabled}
    />
  );
};

export default Img;

