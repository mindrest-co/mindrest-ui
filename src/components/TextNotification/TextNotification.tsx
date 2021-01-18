import React from "react";
import styled from "@emotion/styled";
import { Icon } from "../Icon/Icon";
import { theme } from "../../styles/styles";

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
    margin-left: ${theme.spacing.xs}px;
  }
`;

const Text = styled.div``;

// style

const textSizes = {
  large: theme.typo.b4,
  small: theme.typo.captionMedium,
};

const textColors = {
  error: theme.color.redDark1,
  success: theme.color.greenDark1,
  normal: theme.color.gray3,
};

const iconSizes = {
  large: 20,
  small: 16,
};
