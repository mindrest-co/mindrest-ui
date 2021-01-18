import React from "react";
import styled from "@emotion/styled";
import { Icon } from "../Icon/Icon";
import { radius, shadows, spacing, text } from "../../common/styles";

export type ToastProps = {
  text: string;
  actived?: boolean;
};

export const Toast = ({ text, actived }: ToastProps) => {
  if (!actived) {
    return null;
  }
  return (
    <Container>
      <Text>{text}</Text>
      <CloseButton>
        <Icon />
      </CloseButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 710px;
  padding: ${spacing.xl}px;
  ${shadows.m};
  border-radius: ${radius.medium}px;

  position: absolute;
  left: ${spacing.xl}px;
  bottom: ${spacing.xl}px;
`;

const Text = styled.div`
  font-size: ${text.h6.size}px;
  font-weight: ${text.h6.weight};
`;

const CloseButton = styled.div``;
