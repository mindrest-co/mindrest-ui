import React, { useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    label: "Check",
  },
} as Meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Default = Template.bind({});

export const Actived = Template.bind({});
Actived.args = {
  actived: true,
};

export const Inactived = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
