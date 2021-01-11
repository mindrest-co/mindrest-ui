import React from "react";
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

export const Tabs = () => {
  return (
    <Menu>
      <Tab label="진료대기" actived={true} />
      <Tab label="진료완료" count={1} actived={false} />
    </Menu>
  );
};

const Menu = styled.div`
  display: flex;
`;
