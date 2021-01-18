import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { Tab, TabProps } from "./Tab";

export default {
  title: "Components/Tab",
  component: Tab,
} as Meta;

const Template: Story<TabProps> = args => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "진료대기",
  actived: true,
};

export const WithCount = Template.bind({});
WithCount.args = {
  label: "진료대기",
  actived: true,
  count: 10,
};

const tabItems = ["진료대기", "진료완료"];

export const Tabs = () => {
  const [select, setSelect] = useState(0);
  const onTabClick = (id: number) => {
    setSelect(id);
  };
  const renderItems = () =>
    tabItems.map((item, index) => (
      <Tab
        label={item}
        actived={index === select}
        onClick={() => onTabClick(index)}
      />
    ));

  return <Menu>{renderItems()}</Menu>;
};

const Menu = styled.div`
  display: flex;
`;
