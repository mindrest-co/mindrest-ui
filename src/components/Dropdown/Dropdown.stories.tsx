import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { Dropdown, DropdownProps } from "./Dropdown";
import { radius } from "../../common/styles";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = args => <Dropdown {...args} />;

export const Default = () => {
  const [select, setSelect] = useState(0);
  return (
    <Dropdown
      items={["의사", "간호사"]}
      select={select}
      onClick={(id: number) => setSelect(id)}
    />
  );
};
