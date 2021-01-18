import React from "react";
import styled from "@emotion/styled";
import { Icon } from "../Icon/Icon";
import { theme } from "../../styles/styles";

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
  padding: ${theme.spacing.xl}px;
  ${theme.shadow.md};
  border-radius: ${theme.radius.md}px;

  position: fixed;
  left: ${theme.spacing.xl}px;
  bottom: ${theme.spacing.xl}px;
`;

const Text = styled.div`
  ${theme.typo.h6};
`;

const CloseButton = styled.div``;
