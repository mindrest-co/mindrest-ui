import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { BackTop, BackTopProps } from "./BackTop";

export default {
  title: "Components/BackTop",
  component: BackTop,
} as Meta;

const Template: Story<BackTopProps> = args => (
  <Container>
    <BackTop {...args} />
  </Container>
);

export const Default = Template.bind({});

const Container = styled.div`
  height: 300vh;
`;
