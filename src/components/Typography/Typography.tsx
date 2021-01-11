import React from "react";
import styled from "@emotion/styled";

export type TypographyProps = {
  /** Font Size */
  size: number;
  /** Font Weight */
  weight: number;
  /** Text */
  text: string;
};

/**Typography 정의 */
export const Typography = ({ size, weight, text }: TypographyProps) => {
  return (
    <Container size={size} weight={weight}>
      <Title>{text}</Title>
    </Container>
  );
};

const Container = styled.div<{ size: number; weight: number }>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  display: flex;
`;

const Title = styled.div`
  width: 700px;
`;
