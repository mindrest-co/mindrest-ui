import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";
import { css } from "@emotion/react";

export type TextareaProps = {
  placeholder?: string;
  disabled?: boolean;
};

export const Textarea = ({
  placeholder = "내용을 입력해주세요.",
  disabled = false,
}: TextareaProps) => {
  return <Container placeholder={placeholder} disabled={disabled} />;
};

type ContainerProps = {
  disabled: boolean;
};

const Container = styled.textarea<ContainerProps>`
  width: 100%;
  height: 208px;
  padding: 24px 16px;
  border-radius: ${theme.radius.md}px;
  caret-color: ${theme.color.blue};

  resize: none;
  outline: none;

  ${theme.typo.b4};
  color: ${theme.color.gray1};
  background-color: ${theme.color.gray7};
  ::placeholder {
    color: ${theme.color.gray3};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${theme.color.gray3};
      background-color: ${theme.color.gray5};
      cursor: not-allowed;
    `}
`;
