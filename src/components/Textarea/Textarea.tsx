import React from "react";
import styled from "@emotion/styled";
import { colors, radius, text } from "../../common/styles";
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
  border-radius: ${radius.medium}px;
  caret-color: ${colors.blue};

  resize: none;
  outline: none;

  font-size: ${text.b4.size}px;
  font-weight: ${text.b4.weight};
  color: ${colors.gray1};
  background-color: ${colors.gray7};
  ::placeholder {
    color: ${colors.gray3};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${colors.gray3};
      background-color: ${colors.gray5};
      cursor: not-allowed;
    `}
`;
