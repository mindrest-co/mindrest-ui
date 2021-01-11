import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, radius, text } from "../../common/styles";

export type RoleType = "director" | "doctor" | "nurse";
type SizeType = "small" | "xsmall";

export type RoleBadgeProps = {
  role: RoleType;
  size?: SizeType;
};

const label = {
  director: "원장",
  doctor: "의사",
  nurse: "간호사",
};

export const RoleBadge = ({ role, size = "xsmall" }: RoleBadgeProps) => {
  return (
    <Container role={role} size={size}>
      <Label>{label[role]}</Label>
    </Container>
  );
};

type ContainerProps = {
  role: RoleType;
  size: SizeType;
};

const Container = styled.div<ContainerProps>`
  ${({ size }) => sizeStyles[size]}
  ${({ role }) => roleStyles[role]}
  border-radius: ${radius.small}px;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div``;

const roleStyles = {
  director: css`
    background-color: ${colors.blueDark1};
  `,
  doctor: css`
    background-color: ${colors.gray2};
  `,

  nurse: css`
    background-color: ${colors.redLight1};
  `,
};

const sizeStyles = {
  small: css`
    padding: 4px 8px;
    font-size: ${text.caption.size}px;
    font-weight: ${text.caption.weight};
  `,
  xsmall: css`
    padding: 2px 6px;
    font-size: ${text.badge.size}px;
    font-weight: ${text.badge.weight};
  `,
};
