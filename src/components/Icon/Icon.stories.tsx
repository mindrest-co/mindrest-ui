import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Icon, IconProps } from "./Icon";
import { icons } from "../../styles/icons";

export default {
  title: "Components/Icon",
  component: Icon,
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: icons.alertCircle,
};
