import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";

import { Color } from "./Color";
import { theme, ColorType } from "../../styles/styles";

export default {
  title: "Basic/Color",
  component: Color,
} as Meta;

export const All = () => {
  return (
    <AllContainer>
      <div>
        <Title>GrayScale</Title>
        {GrayScale()}
      </div>
      <div>
        <Title>BlueScale</Title>
        {BlueScale()}
      </div>
      <div>
        <Title>GreenScale</Title>
        {GreenScale()}
      </div>
      <div>
        <Title>RedScale</Title>
        {RedScale()}
      </div>
    </AllContainer>
  );
};

export const GrayScale = () => {
  return (
    <Container>
      {Object.keys(theme.color).map(
        c => c.includes("gray") && <Color color={theme.color[c as ColorType]} />
      )}
    </Container>
  );
};

export const BlueScale = () => {
  return (
    <Container>
      {Object.keys(theme.color).map(
        c => c.includes("blue") && <Color color={theme.color[c as ColorType]} />
      )}
    </Container>
  );
};

export const GreenScale = () => {
  return (
    <Container>
      {Object.keys(theme.color).map(
        c =>
          c.includes("green") && <Color color={theme.color[c as ColorType]} />
      )}
    </Container>
  );
};

export const RedScale = () => {
  return (
    <Container>
      {Object.keys(theme.color).map(
        c => c.includes("red") && <Color color={theme.color[c as ColorType]} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  & > div + div {
    margin-left: 10px;
  }
`;

const AllContainer = styled.div`
  & > div + div {
    margin-top: 30px;
  }
`;

const Title = styled.div`
  margin-bottom: 10px;
`;
