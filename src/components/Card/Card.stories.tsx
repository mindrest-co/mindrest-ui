import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { Card, CardProps } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    title: "광화문숲 정신건강의학과",
    subtitle: "이정석 선생님",
  },
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "/assets/images/person.jpg",
};

export const Disabled = Template.bind({});
Disabled.args = {
  image: "/assets/images/person.jpg",
  disabled: true,
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  title: "SADS 검사",
  subtitle: "(사회적 회피 및 불안척도)",
  state: "weight",
};

export const WithBadgeDisabled = Template.bind({});
WithBadgeDisabled.args = {
  title: "SADS 검사",
  subtitle: "(사회적 회피 및 불안척도)",
  state: "weight",
  disabled: true,
};
