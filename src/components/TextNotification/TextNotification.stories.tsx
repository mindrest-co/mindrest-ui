import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { TextNotification, TextNotificationProps } from "./TextNotification";

export default {
  title: "Components/TextNotification",
  component: TextNotification,
  args: {
    text: "내용을 확인해주세요.",
  },
} as Meta;

const Template: Story<TextNotificationProps> = args => (
  <TextNotification {...args} />
);

export const Default = Template.bind({});

export const Sizes = (args: TextNotificationProps) => {
  args.text = "정확한 정보를 입력해주세요.";
  return (
    <Container>
      <Item>
        <Title>Large</Title>
        <TextNotification {...args} size="large" />
      </Item>
      <Item>
        <Title>Small</Title>
        <TextNotification {...args} size="small" />
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
