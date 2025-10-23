import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledRadio = styled.input<RadioButtonProps>`
  width: 20px;
  height: 20px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`;

const StyledLabel = styled.label<RadioButtonProps>`
  display: flex;
  align-items: center;
  font-size: 16px;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.bgColor || "#ffffff"};
  padding: 8px 12px;
  border-radius: 4px;
  color: ${(props) => (props.disabled ? "#666666" : "#333333")};
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 200px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 10px;
    max-width: 150px;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label = "Radio",
  disabled = false,
  bgColor,
  ...props
}) => {
  return (
    <StyledLabel disabled={disabled} bgColor={bgColor}>
      <StyledRadio type="radio" disabled={disabled} {...props} />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
