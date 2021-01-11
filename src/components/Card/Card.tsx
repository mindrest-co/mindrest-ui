import React, { ReactNode } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, radius, shadows, text } from "../../common/styles";
import { Avatar } from "../Avatar/Avatar";

export type CardProps = {
  image?: string;
  title?: string;
  subtitle?: string;
};

export const Card = ({ image, title, subtitle }: CardProps) => {
  return (
    <Container>
      {image && <Avatar image={image} size="large" />}
      <Content>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>
      <Arrow>{"검사지 1개 >"}</Arrow>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 32px;
  border-radius: ${radius.round}px;
  ${shadows.m};

  display: flex;
  align-items: center;
`;

const Content = styled.div`
  margin-left: 16px;
`;

const Title = styled.div`
  margin-bottom: 4px;
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
