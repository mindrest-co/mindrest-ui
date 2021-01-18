import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";
import { css } from "@emotion/react";
import { Icon } from "../Icon/Icon";

type SizeType = "large" | "medium" | "small";

export type TextButtonProps = {
  text: string;
  size?: SizeType;
  icon?: string;
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const TextButton = ({
  text,
  size = "large",
  icon,
  color = theme.color.gray1,
  disabled = false,
  onClick = () => {},
}: TextButtonProps) => {
  return (
    <Container size={size} color={color} disabled={disabled} onClick={onClick}>
      <TextContainer>{text}</TextContainer>
      {icon && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}
    </Container>
  );
};

type ContainerProps = {
  size: SizeType;
  color: string;
  disabled: boolean;
};

const Container = styled.button<ContainerProps>`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${({ size }) => sizeStyles[size]};
  color: ${({ color }) => color};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
    `}
`;

const TextContainer = styled.div``;

const IconContainer = styled.div`
  margin-left: ${theme.spacing.xs}px;
`;

const sizeStyles = {
  large: theme.typo.h5,
  medium: theme.typo.h6,
  small: theme.typo.captionMedium,
};
