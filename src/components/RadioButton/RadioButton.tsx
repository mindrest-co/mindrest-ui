import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, radius, spacing, text } from "../../common/styles";

type DirectionType = "left" | "bottom";
type SizeType = "large" | "medium" | "small";

export type RadioButtonProps = {
  text: string;
  size?: SizeType;
  direction?: DirectionType;
  disabled?: boolean;
  actived?: boolean;
};

export const RadioButton = ({
  text,
  size = "large",
  direction = "left",
  disabled = false,
  actived = false,
}: RadioButtonProps) => {
  return (
    <Container disabled={disabled} direction={direction} size={size}>
      <OuterCircle actived={actived} size={size}>
        {actived && <InnerCircle actived={actived} size={size} />}
      </OuterCircle>
      <Text actived={actived} size={size}>
        {text}
      </Text>
    </Container>
  );
};

type ContainerProps = {
  disabled: boolean;
  direction: DirectionType;
  size: SizeType;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
    `}

  ${({ direction, size }) => {
    if (direction === "left") {
      return css`
        & > div + div {
          margin-left: ${TextMargins[size]}px;
        }
      `;
    }
    if (direction === "bottom") {
      return css`
        flex-direction: column-reverse;
        justify-content: center;
        & > div + div {
          margin-bottom: ${TextMargins[size]}px;
        }
      `;
    }
  }}
`;

type OuterCircleProps = {
  actived: boolean;
  size: SizeType;
};

const OuterCircle = styled.div<OuterCircleProps>`
  border-radius: ${radius.circle}px;
  border: 2px solid ${({ actived }) => (actived ? colors.blue : colors.gray3)};
  ${({ size }) => outerCircleSizeStyles[size]};

  display: flex;
  justify-content: center;
  align-items: center;
`;

type InnerCircleProps = {
  actived: boolean;
  size: SizeType;
};

const InnerCircle = styled.div<InnerCircleProps>`
  border-radius: ${radius.circle}px;
  background-color: ${({ actived }) => (actived ? colors.blue : colors.gray3)};
  ${({ size }) => innerCircleSizeStyles[size]};
`;

type TextProps = {
  actived: boolean;
  size: SizeType;
};

const Text = styled.div<TextProps>`
  color: ${({ actived }) => (actived ? colors.blue : colors.gray3)};
  ${({ size }) => TextSizeStyles[size]};
  text-align: center;
`;

const outerCircleSizeStyles = {
  large: css`
    width: 40px;
    height: 40px;
  `,
  medium: css`
    width: 30px;
    height: 30px;
  `,
  small: css`
    width: 20px;
    height: 20px;
  `,
};

const innerCircleSizeStyles = {
  large: css`
    width: 22px;
    height: 22px;
  `,
  medium: css`
    width: 16px;
    height: 16px;
  `,
  small: css`
    width: 10px;
    height: 10px;
  `,
};

const TextSizeStyles = {
  large: css`
    font-size: ${text.b1.size}px;
    font-weight: ${text.b1.weight};
  `,
  medium: css`
    font-size: ${text.b4.size}px;
    font-weight: ${text.b4.weight};
  `,
  small: css`
    font-size: ${text.caption.size}px;
    font-weight: ${text.caption.weight};
  `,
};

const TextMargins = {
  large: spacing.m,
  medium: spacing.s,
  small: spacing.s,
};
