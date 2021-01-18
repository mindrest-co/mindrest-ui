import React from "react";
import styled from "@emotion/styled";
import { Icon } from "../Icon/Icon";
import { theme } from "../../styles/styles";
import { icons } from "../../styles/icons";

type StateType = "error" | "success" | "normal";
type SizeType = "large" | "small";

export type TextNotificationProps = {
  text: string;
  state?: StateType;
  size?: SizeType;
  onClick?: () => void;
};

export const TextNotification = ({
  text,
  state = "normal",
  size = "large",
  onClick = () => {},
}: TextNotificationProps) => {
  return (
    <Container state={state} size={size} onClick={onClick}>
      {state === "error" && (
        <Icon
          name={icons.alertCircle}
          color={textColors[state]}
          size={iconSizes[size]}
        />
      )}
      {state === "success" && (
        <Icon
          name={icons.checkCircle}
          color={textColors[state]}
          size={iconSizes[size]}
        />
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

  & > img + div {
    margin-left: ${theme.spacing.xs}px;
  }
  text-align: center;
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
