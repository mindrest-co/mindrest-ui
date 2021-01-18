import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "../../styles/styles";
import { Badge } from "../Badge/Badge";

export type TabProps = {
  label: string;
  count?: number;
  actived?: boolean;
  onClick?: () => void;
};

export const Tab = ({
  label,
  count,
  actived = false,
  onClick = () => {},
}: TabProps) => {
  return (
    <Container actived={actived} onClick={onClick}>
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

  background-color: ${theme.color.gray5};
  color: ${theme.color.gray3};

  ${({ actived }) =>
    actived &&
    css`
      background-color: ${theme.color.gray7};
      color: ${theme.color.gray1};
    `}
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div + div {
    margin-left: ${theme.spacing.xs}px;
  }
`;

const Label = styled.div`
  width: 100%;
  ${theme.typo.h5};
`;
