import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { RadioButton, RadioButtonProps } from "./RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  args: {
    text: "나는 슬프지 않다.",
  },
} as Meta;

const Template: Story<RadioButtonProps> = args => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  actived: true,
};

export const Inactive = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
