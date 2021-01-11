import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, radius, text } from "../../common/styles";

export type StateType = "weight" | "ing" | "done" | "none";
type SizeType = "small" | "xsmall";

export type StateBadgeProps = {
  state: StateType;
  size?: SizeType;
};

const label = {
  weight: "검사대기",
  ing: "검사중",
  done: "검사완료",
  none: "미검사",
};

export const StateBadge = ({ state, size = "xsmall" }: StateBadgeProps) => {
  return (
    <Container state={state} size={size}>
      <Label>{label[state]}</Label>
    </Container>
  );
};

type ContainerProps = {
  state: StateType;
  size: SizeType;
};

const Container = styled.div<ContainerProps>`
  ${({ size }) => sizeStyles[size]};
  ${({ state }) => stateStyles[state]}
  border-radius: ${radius.small}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div``;

const stateStyles = {
  weight: css`
    background-color: ${colors.gray6};
    color: ${colors.gray1};
  `,
  ing: css`
    background-color: ${colors.blueLight3};
    color: ${colors.blueDark1};
  `,

  done: css`
    background-color: ${colors.greenLight3};
    color: ${colors.greenDark1};
  `,

  none: css`
    background-color: ${colors.redLight3};
    color: ${colors.redDark1};
  `,
};

const sizeStyles = {
  small: css`
    padding: 6px 8px;
    font-size: ${text.caption.size}px;
    font-weight: ${text.caption.weight};
  `,
  xsmall: css`
    padding: 4px 8px;
    font-size: ${text.badge.size}px;
    font-weight: ${text.badge.weight};
  `,
};
