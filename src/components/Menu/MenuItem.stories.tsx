import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { MenuItem, MenuItemProps } from "./MenuItem";

export default {
  title: "Components/MenuItem",
  component: MenuItem,
} as Meta;

const Template: Story<MenuItemProps> = args => <MenuItem {...args} />;

export const ItemActive = Template.bind({});
ItemActive.args = {
  label: "검사하기",
  actived: true,
};

export const ItemInactive = Template.bind({});
ItemInactive.args = {
  label: "검사하기",
  actived: false,
};
