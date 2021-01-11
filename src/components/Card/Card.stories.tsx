import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { Card, CardProps } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "/assets/images/person.jpg",
  title: "광화문숲 정신건강의학과",
  subtitle: "이정석 선생님",
};
