import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { TextButton, TextButtonProps } from "./TextButton";

export default {
  title: "Components/TextButton",
  component: TextButton,
  args: {
    text: "Click me",
  },
} as Meta;

const Template: Story<TextButtonProps> = args => <TextButton {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: "plus",
};
