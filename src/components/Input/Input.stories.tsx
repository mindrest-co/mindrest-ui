import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { Input, InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "내용을 입력해주세요.",
  },
} as Meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const States = (args: InputProps) => {
  return (
    <Container>
      <Item>
        <Title>Normal</Title>
        <Input {...args} state="normal" />
      </Item>
      <Item>
        <Title>Success</Title>
        <Input {...args} state="success" />
      </Item>
      <Item>
        <Title>Error</Title>
        <Input {...args} state="error" />
      </Item>
    </Container>
  );
};

const Title = styled.div``;

const Container = styled.div`
  & > div + div {
    margin-top: 30px;
  }
`;

const Item = styled.div`
  & > div + div {
    margin-top: 10px;
  }
`;
