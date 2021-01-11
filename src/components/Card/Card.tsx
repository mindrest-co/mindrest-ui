import React, { ReactNode } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  colors,
  opacity,
  radius,
  shadows,
  spacing,
  text,
  width,
} from "../../common/styles";
import { Avatar } from "../Avatar/Avatar";

export type CardProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  disabled?: boolean;
};

export const Card = ({
  image,
  title,
  subtitle,
  disabled = false,
}: CardProps) => {
  return (
    <Container disabled={disabled}>
      {image && <Avatar image={image} size="large" />}
      <Content>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>
      <Arrow>{"검사지 1개 >"}</Arrow>
    </Container>
  );
};

type ContainerProps = {
  disabled: boolean;
};

const Container = styled.div<ContainerProps>`
  width: ${width.full};
  padding: ${spacing.xxl}px;
  border-radius: ${radius.round}px;
  ${shadows.m};

  display: flex;
  align-items: center;

  cursor: pointer;

  transition: all 0.3s;
  &:hover {
    ${shadows.l};
  }
  user-select: none;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: ${opacity.disabled};
    `}
`;

const Content = styled.div`
  margin-left: ${spacing.l}px;
`;

const Title = styled.div`
  margin-bottom: ${spacing.xs}px;
  font-size: ${text.h4.size}px;
  font-weight: ${text.h4.weight};
  color: ${colors.gray1};
`;

const Subtitle = styled.div`
  font-size: ${text.b4.size}px;
  font-weight: ${text.b4.weight};
  color: ${colors.gray2};
`;

const Arrow = styled.div`
  margin-left: auto;
`;
