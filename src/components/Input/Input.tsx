import React from "react";
import styled from "@emotion/styled";
import { colors, spacing, text } from "../../common/styles";
import { css } from "@emotion/react";

type WidthType = "large" | "small" | "full";
type StateType = "error" | "success" | "normal";

export type InputProps = {
  width?: WidthType;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  state?: StateType;
};

export const Input = ({
  width = "full",
  label,
  placeholder,
  disabled = false,
  state = "normal",
}: InputProps) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputBox
        type="text"
        width={width}
        placeholder={placeholder}
        disabled={disabled}
        state={state}
      />
    </Container>
  );
};

const Container = styled.div`
  & > div + input {
    margin-top: ${spacing.xs}px;
  }
`;

const Label = styled.div`
  font-size: ${text.h6.size}px;
  font-weight: ${text.h6.weight};
  color: ${colors.gray1};
`;

type InputBoxProps = {
  width: WidthType;
  state: StateType;
};

const InputBox = styled.input<InputBoxProps>`
  outline: none;

  border-radius: ${spacing.m}px;
  border: 1px solid ${colors.gray3};
  background-color: ${colors.gray7};
  color: ${colors.gray3};

  padding: 24px 16px;

  width: ${({ width }) => WidthSizes[width]};

  font-size: ${text.b4.size}px;
  font-weight: ${text.b4.weight};

  &:focus {
    border: 1px solid ${colors.blue};
    caret-color: ${colors.blue};
  }

  &:disabled {
    cursor: not-allowed;
    border: 1px solid ${colors.gray3};
    background-color: ${colors.gray5};
    color: ${colors.gray1};
  }

  ${({ state }) => {
    if (state === "error") {
      return css`
        border: 1px solid ${colors.redDark1};
      `;
    }
    if (state === "success") {
      return css`
        border: 1px solid ${colors.greenDark1};
      `;
    }
  }}
`;

// style

const WidthSizes = {
  large: "504px",
  small: "250px",
  full: "100%",
};
