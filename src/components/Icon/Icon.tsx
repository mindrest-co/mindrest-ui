import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "../../styles/styles";

export type IconProps = {
  size?: number;
  color?: string;
  name?: string;
};

export const Icon = ({
  size = 24,
  color = theme.color.gray1,
  name,
}: IconProps) => {
  return <Container size={size} color={color}></Container>;
};

type ContainerProps = {
  size: number;
  color: string;
};

const Container = styled.div<ContainerProps>`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `}
  background-color:red;
  color: ${({ color }) => color};
`;
