import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Divider, DividerProps } from "./Divider";

export default {
  title: "Components/Divider",
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = args => (
  <div>
    Section
    <Divider {...args} />
    Section
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Spacing = Template.bind({});
Spacing.args = {
  spacing: 12,
};
