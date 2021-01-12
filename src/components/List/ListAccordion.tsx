import React from "react";
import styled from "@emotion/styled";
import { colors, text } from "../../common/styles";
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

  background-color: ${colors.gray7};
`;

const Title = styled.div`
  font-size: ${text.h6.size}px;
  font-weight: ${text.h6.weight};
  color: ${colors.gray2};
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
