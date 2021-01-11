import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, spacing, text } from "../../common/styles";
import { Badge } from "../Badge/Badge";

export type TabProps = {
  label: string;
  count?: number;
  actived?: boolean;
};

export const Tab = ({ label, count, actived = false }: TabProps) => {
  return (
    <Container actived={actived}>
      <Content>
        <Label>{label}</Label>
        {count && <Badge>{count}</Badge>}
      </Content>
    </Container>
  );
};

type ContainerProps = {
  actived: boolean;
};

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.gray5};
  color: ${colors.gray3};

  ${({ actived }) =>
    actived &&
    css`
      background-color: ${colors.gray7};
      color: ${colors.gray1};
    `}
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div + div {
    margin-left: ${spacing.xs}px;
  }
`;

const Label = styled.div`
  width: 100%;
  font-size: ${text.h5.size}px;
  font-weight: ${text.h5.weight};
`;
