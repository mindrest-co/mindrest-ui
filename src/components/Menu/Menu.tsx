import React, { ReactNode } from "react";
import styled from "@emotion/styled";

export type MenuProps = {
  children?: ReactNode;
};

export const Menu = ({ children }: MenuProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.div``;
