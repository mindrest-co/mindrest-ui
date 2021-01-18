import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Dropdown } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta;

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
