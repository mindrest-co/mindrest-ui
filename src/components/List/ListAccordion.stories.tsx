import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ListAccordion, ListAccordionProps } from "./ListAccordion";

export default {
  title: "Components/ListAccordion",
  component: ListAccordion,
} as Meta;

const Template: Story<ListAccordionProps> = args => <ListAccordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "👨🏻‍⚕️ 홍길동 선생님",
};
