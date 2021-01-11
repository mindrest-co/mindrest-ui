import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, spacing, text } from "../../common/styles";
import { Card, CardProps } from "../Card/Card";

export type CardListProps = {
  label?: string;
  items: CardProps[];
};

export const CardList = ({ label, items }: CardListProps) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Container>
        {items.map(item => (
          <Card {...item} />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  & > div + div {
    margin-top: ${spacing.l}px;
  }
  margin-bottom: ${spacing.xl}px;
`;

const Label = styled.div`
  margin-bottom: ${spacing.l}px;
  color: ${colors.gray2};
  font-size: ${text.b4.size}px;
  font-weight: ${text.b4.weight};
`;
