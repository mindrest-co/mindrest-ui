import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";
import { animations } from "../../styles/animations";

type SizeType =
  | "xxlarge"
  | "xlarge"
  | "large"
  | "medium"
  | "small"
  | "xsmall"
  | "full";

export type ButtonProps = {
  size?: SizeType;
  backgroundColor?: string;
  color?: string;
  label: string;
  disabled?: boolean;
  loading?: boolean;
  bordered?: boolean;
};

export const Button = ({
  size = "xxlarge",
  backgroundColor = theme.color.gray1,
  color = theme.color.white,
  label,
  disabled = false,
  loading = false,
  bordered = false,
}: ButtonProps) => {
  const renderLoading = () => {
    return (
      <Loading color={color}>
        <Dot1>.</Dot1>
        <Dot2>.</Dot2>
        <Dot3>.</Dot3>
        <Dot4>.</Dot4>
      </Loading>
    );
  };

  return (
    <Container
      size={size}
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      loading={loading}
      bordered={bordered}
    >
      {loading && renderLoading()}
      {!loading && <Label>{label}</Label>}
    </Container>
  );
};

type ContainerProps = {
  size: SizeType;
  backgroundColor: string;
  loading: boolean;
  bordered: boolean;
};

const Container = styled.button<ContainerProps>`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${theme.radius.md}px;

  ${({ size }) => buttonSizes[size]};
  background-color: ${({ backgroundColor }) => backgroundColor};

  cursor: pointer;

  &:disabled {
    opacity: ${theme.opacity.disabled};
    cursor: not-allowed;
  }

  ${({ loading }) =>
    loading &&
    css`
      cursor: progress;
    `}

  transition: all 0.3s ease-in;
  &:hover:enabled {
    opacity: 0.7;
  }

  color: ${({ color }) => color};
  ${theme.typo.h6};

  ${({ size }) => {
    if (size === "xsmall") {
      return css`
        ${theme.typo.captionTitle};
      `;
    }
  }}

  ${({ bordered }) =>
    bordered &&
    css`
      background-color: ${theme.color.white};
      border: 1px solid ${theme.color.gray2};
      color: ${theme.color.gray1};
    `}
`;

const Label = styled.div``;

type LoadingProps = {
  color: string;
};

const Loading = styled.div<LoadingProps>`
  ${theme.typo.h2};

  display: flex;
`;

const Dot1 = styled.div`
  width: 16px;
  animation: ${animations.upDown} 2s ease infinite;
`;

const Dot2 = styled.div`
  width: 16px;
  animation: ${animations.upDown} 2s ease infinite 0.2s;
`;

const Dot3 = styled.div`
  width: 16px;
  animation: ${animations.upDown} 2s ease infinite 0.4s;
`;

const Dot4 = styled.div`
  width: 16px;
  animation: ${animations.upDown} 2s ease infinite 0.6s;
`;

const buttonSizes = {
  xxlarge: css`
    width: 504px;
    height: 70px;
  `,
  xlarge: css`
    width: 358px;
    height: 70px;
  `,
  large: css`
    width: 282px;
    height: 70px;
  `,
  medium: css`
    width: 248px;
    height: 70px;
  `,
  small: css`
    width: 138px;
    height: 70px;
  `,
  xsmall: css`
    width: 138px;
    height: 60px;
  `,
  full: css`
    width: 100%;
    height: 70px;
  `,
};
