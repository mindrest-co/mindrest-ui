import React, { useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { RadioButton, RadioButtonProps } from "./RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  args: {
    items: ["나는 슬프지 않다"],
    select: -1,
  },
} as Meta;

const Template: Story<RadioButtonProps> = args => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  select: 0,
};

export const Inactive = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Bottom = Template.bind({});
Bottom.args = {
  direction: "bottom",
};

export const VerticalGroup = () => {
  const [select, setSelect] = useState(-1);
  return (
    <RadioButton
      items={["나는 슬프지 않다", "나는 슬프다", "나는 괜찮다", "나는 좋다"]}
      select={select}
      onClick={(id: number) => setSelect(id)}
    />
  );
};

export const HorizontalGroup = () => {
  const [select, setSelect] = useState(-1);
  return (
    <RadioButton
      items={["나는 슬프지 않다", "나는 슬프다", "나는 괜찮다", "나는 좋다"]}
      direction="bottom"
      select={select}
      onClick={(id: number) => setSelect(id)}
    />
  );
};
