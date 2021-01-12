import React from "react";
import styled from "@emotion/styled";
import { Icon } from "../Icon/Icon";
import { css } from "@emotion/react";
import { colors } from "../../common/styles";

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
          background-color: ${colors.gray5};
          color: ${colors.gray2};
        `
      : css`
          background-color: ${colors.gray7};
          color: ${colors.gray3};
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
  background-color: ${colors.blue};
`;
