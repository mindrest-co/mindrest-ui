import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { Textarea, TextareaProps } from "./Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  args: {
    label: "Check",
  },
} as Meta;

const Template: Story<TextareaProps> = args => <Textarea {...args} />;

export const Default = Template.bind({});
