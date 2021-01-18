import React from "react";
import styled from "@emotion/styled";
import { Icon } from "../Icon/Icon";
import { css } from "@emotion/react";
import { theme } from "../../styles/styles";

export type MenuItemProps = {
  label: string;
  actived?: boolean;
};

export const MenuItem = ({ label, actived = false }: MenuItemProps) => {
  return (
    <Container actived={actived}>
      {actived && <ActiveBar />}
      <Icon size={24} />
      <Label>{label}</Label>
    </Container>
  );
};

type ContainerProps = {
  actived: boolean;
};

const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  padding-left: 24px;

  ${({ actived }) =>
    actived
      ? css`
          background-color: ${theme.color.gray5};
          color: ${theme.color.gray2};
        `
      : css`
          background-color: ${theme.color.gray7};
          color: ${theme.color.gray3};
        `}
`;

const Label = styled.div`
  margin-left: 8px;
`;

const ActiveBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: ${theme.color.blue};
`;
