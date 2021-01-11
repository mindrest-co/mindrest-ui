import React, { ReactNode } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, radius, text } from "../../common/styles";

type TypeType = "default" | "pill";

export type BadgeProps = {
  backgroundColor?: string;
  textColor?: string;
  children: ReactNode;
  type?: TypeType;
};

export const Badge = ({
  backgroundColor = colors.redDark1,
  textColor = colors.white,
  children,
  type = "default",
}: BadgeProps) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      textColor={textColor}
      type={type}
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
  border-radius: ${radius.small}px;
  font-size: ${text.badge.size}px;
  font-weight: ${text.badge.weight};

  ${({ type }) => typeStyle[type]}

  display: flex;
  justify-content: center;
  align-items: center;
`;

const typeStyle = {
  default: css``,
  pill: css`
    padding: 10px 16px;
    background-color: ${colors.gray5};
    color: ${colors.gray1};
    border: 1px solid ${colors.gray4};
    border-radius: ${radius.circle}px;
    font-size: ${text.caption.size}px;
    font-weight: ${text.caption.weight};
  `,
};
