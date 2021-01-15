import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { Accordion, AccordionProps } from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  args: {
    title: "제목 입니다.",
  },
} as Meta;

const Template: Story<AccordionProps> = args => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "test",
};
