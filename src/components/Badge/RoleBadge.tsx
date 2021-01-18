import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";

export type RoleType = "director" | "doctor" | "nurse";
type SizeType = "small" | "xsmall";

export type RoleBadgeProps = {
  role: RoleType;
  size?: SizeType;
};

const text = {
  director: "원장",
  doctor: "의사",
  nurse: "간호사",
};

export const RoleBadge = ({ role, size = "xsmall" }: RoleBadgeProps) => {
  return (
    <Container role={role} size={size}>
      <Text>{text[role]}</Text>
    </Container>
  );
};

type ContainerProps = {
  role: RoleType;
  size: SizeType;
};

const Container = styled.div<ContainerProps>`
  ${({ size }) => textSizes[size]}
  ${({ role }) => roleStyles[role]}
  border-radius: ${theme.radius.sm}px;
  color: ${theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div``;

const roleStyles = {
  director: css`
    background-color: ${theme.color.blueDark1};
  `,
  doctor: css`
    background-color: ${theme.color.gray2};
  `,

  nurse: css`
    background-color: ${theme.color.redLight1};
  `,
};

const textSizes = {
  small: css`
    padding: 4px 8px;
    ${theme.typo.caption};
  `,
  xsmall: css`
    padding: 2px 6px;
    ${theme.typo.badge};
  `,
};
