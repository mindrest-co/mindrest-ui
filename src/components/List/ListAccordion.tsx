import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";
import { css } from "@emotion/react";

export type ListAccordionProps = {
  title: string;
  actived?: boolean;
  onClick?: () => void;
};

export const ListAccordion = ({
  title,
  actived = false,
  onClick = () => {},
}: ListAccordionProps) => {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
      <Arrow actived={actived}>⬇</Arrow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
  padding: 0px 16px;

  background-color: ${theme.color.gray7};
`;

const Title = styled.div`
  ${theme.typo.h6};
  color: ${theme.color.gray2};
`;

type ArrowProps = {
  actived: boolean;
};

const Arrow = styled.div<ArrowProps>`
  transition: transform 0.3s;
  ${({ actived }) =>
    actived &&
    css`
      transform: rotate(180deg);
    `}
`;
