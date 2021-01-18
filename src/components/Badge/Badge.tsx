import React, { ReactNode } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";

type TypeType = "default" | "pill";

export type BadgeProps = {
  backgroundColor?: string;
  textColor?: string;
  children: ReactNode;
  type?: TypeType;
  onClick?: () => void;
};

export const Badge = ({
  backgroundColor = theme.color.redDark1,
  textColor = theme.color.white,
  children,
  type = "default",
  onClick = () => {},
}: BadgeProps) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      textColor={textColor}
      type={type}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

type ContainerProps = {
  backgroundColor: string;
  textColor: string;
  type: TypeType;
};

const Container = styled.div<ContainerProps>`
  padding: 2px 6px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  border-radius: ${theme.radius.sm}px;
  ${theme.typo.badge};

  ${({ type }) => typeStyle[type]}

  display: flex;
  justify-content: center;
  align-items: center;
`;

const typeStyle = {
  default: css``,
  pill: css`
    padding: 10px 16px;
    background-color: ${theme.color.gray5};
    color: ${theme.color.gray1};
    border: 1px solid ${theme.color.gray4};
    border-radius: ${theme.radius.circle}px;
    ${theme.typo.caption};
  `,
};
