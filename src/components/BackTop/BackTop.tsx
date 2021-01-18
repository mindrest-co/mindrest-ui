import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";
import { css } from "@emotion/react";

type SizeType = "large" | "small";

export type BackTopProps = {
  size?: SizeType;
};

export const BackTop = ({ size = "large" }: BackTopProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container show={show} size={size} onClick={onScrollTop}>
      ⬆
    </Container>
  );
};

type ContainerProps = {
  show: boolean;
  size: SizeType;
};

const Container = styled.button<ContainerProps>`
  all: unset;

  cursor: pointer;
  ${theme.shadow.lg};
  border-radius: ${theme.radius.circle}px;
  ${({ size }) => sizes[size]};

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: ${theme.spacing.xl}px;
  bottom: ${theme.spacing.xl}px;

  transition: all 0.3s ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

const sizes = {
  large: css`
    width: 60px;
    height: 60px;
    font-size: 30px;
  `,
  small: css`
    width: 24px;
    height: 24px;
    font-size: 12px;
  `,
};
