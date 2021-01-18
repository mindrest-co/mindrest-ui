import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "../../styles/styles";

type DirectionType = "left" | "bottom";
type SizeType = "large" | "medium" | "small";

export type RadioButtonProps = {
  items: string[];
  select: number;
  size?: SizeType;
  direction?: DirectionType;
  disabled?: boolean;
  onClick?: (id: number) => void;
};

export const RadioButton = ({
  items,
  select,
  size = "large",
  direction = "left",
  disabled = false,
  onClick = () => {},
}: RadioButtonProps) => {
  return (
    <Group disabled={disabled} direction={direction} size={size}>
      {items.map((text, index) => (
        <Container
          disabled={disabled}
          direction={direction}
          size={size}
          onClick={() => onClick(index)}
        >
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
  border-radius: ${theme.radius.circle}px;
  border: 2px solid
    ${({ actived }) => (actived ? theme.color.blue : theme.color.gray3)};
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
  border-radius: ${theme.radius.circle}px;
  background-color: ${({ actived }) =>
    actived ? theme.color.blue : theme.color.gray3};
  ${({ size }) => innerCircleSizeStyles[size]};
`;

type TextProps = {
  actived: boolean;
  size: SizeType;
  direction: DirectionType;
};

const Text = styled.div<TextProps>`
  color: ${({ actived }) => (actived ? theme.color.blue : theme.color.gray3)};
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
  large: theme.typo.b1,
  medium: theme.typo.b4,
  small: theme.typo.caption,
};

const textMargins = {
  large: theme.spacing.md,
  medium: theme.spacing.sm,
  small: theme.spacing.sm,
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
  large: theme.spacing.lg,
  medium: theme.spacing.lg,
  small: theme.spacing.md,
};

const horizontalMargins = {
  large: 32,
  medium: 24,
  small: 24,
};
