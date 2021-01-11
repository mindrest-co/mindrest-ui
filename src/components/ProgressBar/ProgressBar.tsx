import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../common/styles";

export type ProgressBarProps = {
  status: number;
};

export const ProgressBar = ({ status }: ProgressBarProps) => {
  return (
    <Container>
      <Status status={status} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${colors.gray5};
`;

type StatusProps = {
  status: number;
};

const Status = styled.div<StatusProps>`
  width: ${({ status }) => status}%;
  height: 4px;
  background-color: ${colors.blue};
`;
