import React from "react";
import styled from "@emotion/styled";
import { colors, spacing, text } from "../../common/styles";
import { css } from "@emotion/react";
import { Icon } from "../Icon/Icon";

type SizeType = "large" | "medium" | "small";

export type TextButtonProps = {
  text: string;
  size?: SizeType;
  icon?: string;
  color?: string;
  disabled?: boolean;
};

export const TextButton = ({
  text,
  size = "large",
  icon,
  color = colors.gray1,
  disabled = false,
}: TextButtonProps) => {
  return (
    <Container size={size} color={color} disabled={disabled}>
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
  margin-left: ${spacing.xs}px;
`;

const sizeStyles = {
  large: css`
    font-size: ${text.h5.size}px;
    font-weight: ${text.h5.weight};
  `,
  medium: css`
    font-size: ${text.h6.size}px;
    font-weight: ${text.h6.weight};
  `,
  small: css`
    font-size: ${text.captionMedium.size}px;
    font-weight: ${text.captionMedium.weight};
  `,
};
