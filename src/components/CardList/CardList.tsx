import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";
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
    margin-top: ${theme.spacing.lg}px;
  }
  margin-bottom: ${theme.spacing.xl}px;
`;

const Label = styled.div`
  margin-bottom: ${theme.spacing.lg}px;
  color: ${theme.color.gray2};
  ${theme.typo.b4};
`;
