import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";

export type IconProps = {
  size?: number;
  color?: string;
  name: string;
};

export const Icon = ({
  size = 24,
  color = theme.color.gray1,
  name,
}: IconProps) => {
  return <Container src={name} width={size} height={size} color={color} />;
};

const Container = styled.img``;
