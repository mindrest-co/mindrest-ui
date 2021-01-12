import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export type IconProps = {
  size?: number;
};

export const Icon = ({ size = 24 }: IconProps) => {
  return <Container size={size}></Container>;
};

type ContainerProps = {
  size: number;
};

const Container = styled.div<ContainerProps>`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `}
  background-color:red;
`;
