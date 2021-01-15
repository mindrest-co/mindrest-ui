import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { Accordion, AccordionProps } from "./Accordion";
import { ToggleButton } from "../ToggleButton/ToggleButton";

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

export const WithToggleButtonVertical = (args: AccordionProps) => {
  return (
    <Accordion {...args} title="질문 입니다." actived={true}>
      <ToggleButton items={["1번", "2번", "3번"]} select={1} />
    </Accordion>
  );
};

export const WithToggleButtonHorizontal = (args: AccordionProps) => {
  return (
    <Accordion {...args} title="질문 입니다." actived={true}>
      <ToggleButton
        items={["1번", "2번", "3번"]}
        select={1}
        direction="horizontal"
      />
    </Accordion>
  );
};
