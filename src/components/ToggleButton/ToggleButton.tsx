import React from "react";
import styled from "@emotion/styled";
import { colors, radius, shadows, text } from "../../common/styles";
import { css } from "@emotion/react";

type DirectionType = "horizontal" | "vertical";
type SizeType = "large" | "small";

export type ToggleButtonProps = {
  items: string[];
  select: number;
  direction?: DirectionType;
  size?: SizeType;
  onClick?: (id: number) => void;
};

export const ToggleButton = ({
  direction = "vertical",
  items,
  size = "large",
  select = -1,
  onClick = () => {},
}: ToggleButtonProps) => {
  const itemWidth = direction === "vertical" ? 100 : 100 / items.length;
  return (
    <Container direction={direction}>
      {items.map((item, index) => (
        <Item
          key={`${item}-${index}`}
          size={size}
          actived={select === index}
          width={itemWidth}
          direction={direction}
          onClick={() => onClick(index)}
        >
          <Text>{item}</Text>
        </Item>
      ))}
    </Container>
  );
};

// component

type ContainerProps = {
  direction: DirectionType;
};

const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  border-radius: ${radius.large}px;
  overflow: hideen;

  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};

  ${shadows.m};

  ${({ direction }) =>
    direction === "vertical"
      ? css`
          & > div {
            border-left: 1px solid ${colors.gray5};
            border-right: 1px solid ${colors.gray5};
            border-top: 1px solid ${colors.gray5};
          }

          & > div:first-child {
            border-top-left-radius: ${radius.large}px;
            border-top-right-radius: ${radius.large}px;
          }
          & > div:last-child {
            border-bottom-left-radius: ${radius.large}px;
            border-bottom-right-radius: ${radius.large}px;
            border-bottom: 1px solid ${colors.gray5};
          }
        `
      : css`
          & > div {
            border-top: 1px solid ${colors.gray5};
            border-bottom: 1px solid ${colors.gray5};
            border-left: 1px solid ${colors.gray5};
          }

          & > div:first-child {
            border-top-left-radius: ${radius.large}px;
            border-bottom-left-radius: ${radius.large}px;
          }
          & > div:last-child {
            border-top-right-radius: ${radius.large}px;
            border-bottom-right-radius: ${radius.large}px;
            border-right: 1px solid ${colors.gray5};
          }
        `}
`;

type ItemProps = {
  size: SizeType;
  actived: boolean;
  width: number;
  direction: DirectionType;
};

const Item = styled.div<ItemProps>`
  width: ${({ width }) => `${width}%`};
  background-color: ${colors.white};
  ${({ size }) => itemPaddings[size]};
  ${({ size }) => textSizes[size]};
  ${({ actived }) =>
    actived
      ? css`
          background-color: ${colors.blue};
          color: ${colors.white};
        `
      : css`
          background-color: ${colors.white};
          color: ${colors.gray1};
        `}

  display: flex;
  justify-content: ${({ direction }) =>
    direction === "vertical" ? "flex-start" : "center"};
  align-items: center;
  text-align: center;
`;

const Text = styled.div``;

// style

const itemPaddings = {
  large: css`
    padding: 30px;
  `,
  small: css`
    padding: 24px;
  `,
};

const textSizes = {
  large: css`
    font-size: ${text.h4.size}px;
    font-weight: ${text.h4.weight};
  `,
  small: css`
    font-size: ${text.h6.size}px;
    font-weight: ${text.h6.weight};
  `,
};
