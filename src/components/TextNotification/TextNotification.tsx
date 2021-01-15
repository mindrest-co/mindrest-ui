import React from "react";
import styled from "@emotion/styled";
import { Icon } from "../Icon/Icon";
import { colors, spacing, text } from "../../common/styles";
import { css } from "@emotion/react";

type StateType = "error" | "success" | "normal";
type SizeType = "large" | "small";

export type TextNotificationProps = {
  text: string;
  state?: StateType;
  size?: SizeType;
};

export const TextNotification = ({
  text,
  state = "normal",
  size = "large",
}: TextNotificationProps) => {
  return (
    <Container state={state} size={size}>
      {state === "error" && (
        <Icon name="error" color={textColors[state]} size={iconSizes[size]} />
      )}
      {state === "success" && (
        <Icon name="success" color={textColors[state]} size={iconSizes[size]} />
      )}
      <Text>{text}</Text>
    </Container>
  );
};

type ContainerProps = {
  state: StateType;
  size: SizeType;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: ${({ state }) => textColors[state]};
  ${({ size }) => textSizes[size]};

  & > div + div {
    margin-left: ${spacing.xs}px;
  }
`;

const Text = styled.div``;

// style

const textSizes = {
  large: css`
    font-size: ${text.b4.size}px;
    font-weight: ${text.b4.weight};
  `,
  small: css`
    font-size: ${text.captionMedium.size}px;
    font-weight: ${text.captionMedium.weight};
  `,
};

const textColors = {
  error: colors.redDark1,
  success: colors.greenDark1,
  normal: colors.gray3,
};

const iconSizes = {
  large: 20,
  small: 16,
};
