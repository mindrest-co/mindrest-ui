import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";

export type StatusType = "weight" | "ing" | "done" | "none";
type SizeType = "small" | "xsmall";

export type StatusBadgeProps = {
  status: StatusType;
  size?: SizeType;
};

const text = {
  weight: "검사대기",
  ing: "검사중",
  done: "검사완료",
  none: "미검사",
};

export const StatusBadge = ({ status, size = "xsmall" }: StatusBadgeProps) => {
  return (
    <Container status={status} size={size}>
      <Text>{text[status]}</Text>
    </Container>
  );
};

type ContainerProps = {
  status: StatusType;
  size: SizeType;
};

const Container = styled.div<ContainerProps>`
  ${({ size }) => sizeStyles[size]};
  ${({ status }) => statusStyles[status]}
  border-radius: ${theme.radius.sm}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div``;

const statusStyles = {
  weight: css`
    background-color: ${theme.color.gray6};
    color: ${theme.color.gray1};
  `,
  ing: css`
    background-color: ${theme.color.blueLight3};
    color: ${theme.color.blueDark1};
  `,

  done: css`
    background-color: ${theme.color.greenLight3};
    color: ${theme.color.greenDark1};
  `,

  none: css`
    background-color: ${theme.color.redLight3};
    color: ${theme.color.redDark1};
  `,
};

const sizeStyles = {
  small: css`
    padding: 6px 8px;
    ${theme.typo.caption};
  `,
  xsmall: css`
    padding: 4px 8px;
    ${theme.typo.badge};
  `,
};
