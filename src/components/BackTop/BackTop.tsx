import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { radius, shadows, spacing } from "../../common/styles";

export type BackTopProps = {};

export const BackTop = ({}: BackTopProps) => {
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
    <Container show={show} onClick={onScrollTop}>
      ⬆
    </Container>
  );
};

type ContainerProps = {
  show: boolean;
};

const Container = styled.button<ContainerProps>`
  all: unset;

  cursor: pointer;
  ${shadows.l};
  border-radius: ${radius.circle}px;
  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: ${spacing.xl}px;
  bottom: ${spacing.xl}px;

  transition: all 0.3s ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
