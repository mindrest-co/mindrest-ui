import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, radius, spacing, text } from "../../common/styles";

type DirectionType = "left" | "bottom";
type SizeType = "large" | "medium" | "small";

export type RadioButtonProps = {
  items: string[];
  select: number;
  size?: SizeType;
  direction?: DirectionType;
  disabled?: boolean;
};

export const RadioButton = ({
  items,
  select,
  size = "large",
  direction = "left",
  disabled = false,
}: RadioButtonProps) => {
  return (
    <Group disabled={disabled} direction={direction} size={size}>
      {items.map((text, index) => (
        <Container disabled={disabled} direction={direction} size={size}>
          <OuterCircle actived={select === index} size={size}>
            {select === index && (
              <InnerCircle actived={select === index} size={size} />
            )}
          </OuterCircle>
          <Text actived={select === index} size={size} direction={direction}>
            {text}
          </Text>
        </Container>
      ))}
    </Group>
  );
};

type GroupProps = {
  disabled: boolean;
  direction: DirectionType;
  size: SizeType;
};

const Group = styled.div<GroupProps>`
  ${({ direction, size }) => {
    if (direction === "left") {
      return css`
        & > div + div {
          margin-top: ${verticalMargins[size]}px;
        }
      `;
    }
    if (direction === "bottom") {
      return css`
        display: flex;
        & > div + div {
          margin-left: ${horizontalMargins[size]}px;
        }
      `;
    }
  }}
`;

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
          margin-left: ${textMargins[size]}px;
        }
      `;
    }
    if (direction === "bottom") {
      return css`
        flex-direction: column-reverse;
        & > div + div {
          margin-bottom: ${textMargins[size]}px;
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
  direction: DirectionType;
};

const Text = styled.div<TextProps>`
  color: ${({ actived }) => (actived ? colors.blue : colors.gray3)};
  ${({ size }) => textSizeStyles[size]};
  text-align: center;
  ${({ direction, size }) => {
    if (direction === "bottom") {
      return textWithStyles[size];
    }
  }};
  word-break: keep-all;
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

const textSizeStyles = {
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

const textMargins = {
  large: spacing.m,
  medium: spacing.s,
  small: spacing.s,
};

const textWithStyles = {
  large: css`
    width: 130px;
  `,
  medium: css`
    width: 80px;
  `,
  small: css`
    width: 70px;
  `,
};

const verticalMargins = {
  large: spacing.l,
  medium: spacing.l,
  small: spacing.m,
};

const horizontalMargins = {
  large: 32,
  medium: 24,
  small: 24,
};
