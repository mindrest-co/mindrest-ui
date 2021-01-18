import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";
import { Avatar } from "../Avatar/Avatar";
import { StatusBadge, StatusType } from "../Badge/StatusBadge";

export type CardProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  disabled?: boolean;
  status?: StatusType;
  onClick?: () => void;
};

export const Card = ({
  image,
  title,
  subtitle,
  disabled = false,
  status,
  onClick = () => {},
}: CardProps) => {
  return (
    <Container disabled={disabled} onClick={onClick}>
      {image && (
        <ImageContainer>
          <Avatar image={image} size="large" />
        </ImageContainer>
      )}
      <Content>
        {title && (
          <TitleContainer>
            <Title>{title}</Title>
            {status && <StatusBadge status={status} />}
          </TitleContainer>
        )}
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
  width: ${theme.width.full};
  padding: ${theme.spacing.xxl}px;
  border-radius: ${theme.radius.round}px;
  ${theme.shadow.md};

  display: flex;
  align-items: center;

  cursor: pointer;

  transition: all 0.3s;
  &:hover {
    ${theme.shadow.lg};
  }
  user-select: none;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: ${theme.opacity.disabled};
    `}
`;

const ImageContainer = styled.div`
  margin-right: ${theme.spacing.lg}px;
`;

const Content = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: ${theme.spacing.xs}px;
  align-items: center;

  & > div + div {
    margin-left: ${theme.spacing.md}px;
  }
`;

const Title = styled.div`
  ${theme.typo.h4};
  color: ${theme.color.gray1};
`;

const Subtitle = styled.div`
  ${theme.typo.b4};
  color: ${theme.color.gray2};
`;

const Arrow = styled.div`
  margin-left: auto;
`;
