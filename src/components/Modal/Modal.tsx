import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, radius, shadows } from "../../common/styles";

type SizeType = "large" | "small";

export type ModalProps = {
  children: ReactNode;
  size?: SizeType;
  dimmed?: boolean;
  actived: boolean;
};

export const Modal = ({
  children,
  size = "large",
  dimmed = true,
  actived,
}: ModalProps) => {
  if (!actived) {
    return null;
  }
  return (
    <Container>
      {dimmed && <Overlay />}
      <ModalBox size={size}>{children}</ModalBox>
    </Container>
  );
};

// component

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

type ModalBoxProps = {
  size: SizeType;
};

const ModalBox = styled.div<ModalBoxProps>`
  position: absolute;
  ${({ size }) => containerPaddings[size]};
  ${shadows.m};
  border-radius: ${radius.round}px;
  background-color: ${colors.white};
`;

// style

const containerPaddings = {
  large: css`
    padding: 48px;
  `,
  small: css`
    padding: 32px;
  `,
};
