import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.bgColor || "#007bff"};
  color: ${(props) => (props.disabled ? "#666666" : "#ffffff")};
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 200px;

  &:hover:not(:disabled) {
    background-color: ${(props) =>
      props.bgColor ? darken(0.1, props.bgColor) : "#0056b3"};
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
    max-width: 150px;
  }
`;

const Button: React.FC<ButtonProps> = ({
  label = "Click Me",
  disabled = false,
  bgColor,
  ...props
}) => {
  return (
    <StyledButton disabled={disabled} bgColor={bgColor} {...props}>
      {label}
    </StyledButton>
  );
};

export default Button;

function darken(amount: number, color: string): string {
  return color;
}
