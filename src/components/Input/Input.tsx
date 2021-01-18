import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";
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
    margin-top: ${theme.spacing.xs}px;
  }
`;

const Label = styled.div`
  ${theme.typo.h6};
  color: ${theme.color.gray1};
`;

type InputBoxProps = {
  width: WidthType;
  state: StateType;
};

const InputBox = styled.input<InputBoxProps>`
  outline: none;

  border-radius: ${theme.spacing.md}px;
  border: 1px solid ${theme.color.gray3};
  background-color: ${theme.color.gray7};
  color: ${theme.color.gray3};

  padding: 24px 16px;

  width: ${({ width }) => WidthSizes[width]};

  ${theme.typo.b4};

  &:focus {
    border: 1px solid ${theme.color.blue};
    caret-color: ${theme.color.blue};
  }

  &:disabled {
    cursor: not-allowed;
    border: 1px solid ${theme.color.gray3};
    background-color: ${theme.color.gray5};
    color: ${theme.color.gray1};
  }

  ${({ state }) => {
    if (state === "error") {
      return css`
        border: 1px solid ${theme.color.redDark1};
      `;
    }
    if (state === "success") {
      return css`
        border: 1px solid ${theme.color.greenDark1};
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
