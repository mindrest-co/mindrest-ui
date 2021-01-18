import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";
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
  border-radius: ${theme.radius.lg}px;
  overflow: hideen;

  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};

  ${theme.shadow.md};

  ${({ direction }) =>
    direction === "vertical"
      ? css`
          & > div {
            border-left: 1px solid ${theme.color.gray5};
            border-right: 1px solid ${theme.color.gray5};
            border-top: 1px solid ${theme.color.gray5};
          }

          & > div:first-child {
            border-top-left-radius: ${theme.radius.lg}px;
            border-top-right-radius: ${theme.radius.lg}px;
          }
          & > div:last-child {
            border-bottom-left-radius: ${theme.radius.lg}px;
            border-bottom-right-radius: ${theme.radius.lg}px;
            border-bottom: 1px solid ${theme.color.gray5};
          }
        `
      : css`
          & > div {
            border-top: 1px solid ${theme.color.gray5};
            border-bottom: 1px solid ${theme.color.gray5};
            border-left: 1px solid ${theme.color.gray5};
          }

          & > div:first-child {
            border-top-left-radius: ${theme.radius.lg}px;
            border-bottom-left-radius: ${theme.radius.lg}px;
          }
          & > div:last-child {
            border-top-right-radius: ${theme.radius.lg}px;
            border-bottom-right-radius: ${theme.radius.lg}px;
            border-right: 1px solid ${theme.color.gray5};
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
  background-color: ${theme.color.white};
  ${({ size }) => itemPaddings[size]};
  ${({ size }) => textSizes[size]};
  ${({ actived }) =>
    actived
      ? css`
          background-color: ${theme.color.blue};
          color: ${theme.color.white};
        `
      : css`
          background-color: ${theme.color.white};
          color: ${theme.color.gray1};
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
  large: theme.typo.b4,
  small: theme.typo.h6,
};
