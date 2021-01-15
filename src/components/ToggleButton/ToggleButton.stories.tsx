import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { ToggleButton, ToggleButtonProps } from "./ToggleButton";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
} as Meta;

const Template: Story<ToggleButtonProps> = args => <ToggleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  direction: "vertical",
  items: ["1번", "2번", "3번"],
};

export const Vertical = () => {
  const [select, setSelect] = useState(-1);
  return (
    <ToggleButton
      direction="vertical"
      items={[
        "나는 슬프지 않다",
        "나는 슬프다",
        "나는 항상 슬프고 기운을 낼 수 없다.",
        "나는 너무 슬프고 불행해서 도저히 견딜 수 없다.",
      ]}
      select={select}
      onClick={(id: number) => setSelect(id)}
    />
  );
};

export const Horizontal = () => {
  const [select, setSelect] = useState(-1);
  return (
    <ToggleButton
      direction="horizontal"
      items={["그렇다", "아니다"]}
      select={select}
      onClick={(id: number) => setSelect(id)}
    />
  );
};
