import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../common/styles";

export type ColorProps = {
  /** 원하는 color를 입력합니다. */
  color: string;
};

/** Color 정의 입니다. */
export const Color = ({ color }: ColorProps) => {
  return (
    <Container>
      <Palette color={color} />
      <Hex>{color}</Hex>
    </Container>
  );
};

const Container = styled.div`
  border: 0.5px solid ${colors.gray5};
  border-radius: 4px;
  overflow: hidden;
`;

const Palette = styled.div<ColorProps>`
  width: 100px;
  height: 100px;
  background-color: ${({ color }) => color};
`;

const Hex = styled.div`
  font-size: 12px;
  font-weight: 100;
  margin: 10px;
`;
