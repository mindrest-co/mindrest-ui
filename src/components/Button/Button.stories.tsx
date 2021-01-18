import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { Button, ButtonProps } from "./Button";
import { theme } from "../../styles/styles";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => (
  <Button {...args} label="Click me" />
);

export const Default = Template.bind({});

export const Sizes = () => {
  return (
    <Vertical>
      <div>
        <Title>XXLarge(Default)</Title>
        <Button size="xxlarge" label="Click me" />
      </div>
      <div>
        <Title>XLarge</Title>
        <Button size="xlarge" label="Click me" />
      </div>
      <div>
        <Title>Large</Title>
        <Button size="large" label="Click me" />
      </div>
      <div>
        <Title>Medium</Title>
        <Button size="medium" label="Click me" />
      </div>
      <div>
        <Title>Small</Title>
        <Button size="small" label="Click me" />
      </div>
      <div>
        <Title>XSmall</Title>
        <Button size="xsmall" label="Click me" />
      </div>
      <div>
        <Title>Full(100%)</Title>
        <Button size="full" label="Click me" />
      </div>
    </Vertical>
  );
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};

const Title = styled.div`
  ${theme.typo.captionTitle};
  margin-bottom: 10px;
`;

const Vertical = styled.div`
  & > div + div {
    margin-top: 30px;
  }
`;
