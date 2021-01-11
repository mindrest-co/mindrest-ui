import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ProgressBar, ProgressBarProps } from "./ProgressBar";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = args => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 30,
};
