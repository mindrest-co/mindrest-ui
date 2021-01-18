import React from "react";
import styled from "@emotion/styled";
import { theme, TypoType } from "../../styles/styles";

export type TypographyProps = {
  size: TypoType;
  text: string;
};

/**Typography 정의 */
export const Typography = ({ size, text }: TypographyProps) => {
  return (
    <Container size={size}>
      <Title>{text}</Title>
    </Container>
  );
};

const Container = styled.div<{ size: TypoType }>`
  ${({ size }) => theme.typo[size]};
  display: flex;
`;

const Title = styled.div`
  width: 700px;
`;
