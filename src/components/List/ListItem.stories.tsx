import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ListItem, ListItemProps } from "./ListItem";

export default {
  title: "Components/ListItem",
  component: ListItem,
  args: {
    title: "홍길동(M 24)",
    subtitle: "123456789",
  },
} as Meta;

const Template: Story<ListItemProps> = args => <ListItem {...args} />;

export const Active = Template.bind({});
Active.args = {
  actived: true,
};

export const Inactive = Template.bind({});

export const Notice = Template.bind({});
Notice.args = {
  notice: true,
};
