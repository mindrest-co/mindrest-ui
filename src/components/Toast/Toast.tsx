import React from "react";
import styled from "@emotion/styled";
import { Icon } from "../Icon/Icon";
import { theme } from "../../styles/styles";
import { icons } from "../../styles/icons";

export type ToastProps = {
  text: string;
  actived?: boolean;
  onClick?: () => void;
  onCancelClick?: () => void;
};

export const Toast = ({
  text,
  actived,
  onClick = () => {},
  onCancelClick = () => {},
}: ToastProps) => {
  if (!actived) {
    return null;
  }
  return (
    <Container onClick={onClick}>
      <Text>{text}</Text>
      <CloseButton onClick={onCancelClick}>
        <Icon name={icons.cancel} size={24} />
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

const CloseButton = styled.div`
  cursor: pointer;
`;
