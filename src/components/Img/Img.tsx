import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<ImgProps>`
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.bgColor || "transparent"};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

const Img: React.FC<ImgProps> = ({
  src = "https://via.placeholder.com/200",
  alt = "Image",
  disabled = false,
  bgColor,
  ...props
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      disabled={disabled}
      bgColor={bgColor}
      {...props}
    />
  );
};

export default Img;
