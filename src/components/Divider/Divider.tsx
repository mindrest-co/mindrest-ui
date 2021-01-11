import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../common/styles";
import { css } from "@emotion/react";

export type DividerProps = {
  spacing?: number;
};

export const Divider = ({ spacing }: DividerProps) => {
  return <Container spacing={spacing} />;
};

type ContainerProps = {
  spacing?: number;
};

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray5};
  ${({ spacing }) =>
    spacing &&
    css`
      margin: ${spacing}px 0px;
    `}
`;
