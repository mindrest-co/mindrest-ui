import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Menu, MenuProps } from "./Menu";
import { MenuItem } from "./MenuItem";

export default {
  title: "Components/Menu",
  component: Menu,
} as Meta;

export const Default = () => {
  return (
    <Menu>
      <MenuItem label="검사하기" actived />
      <MenuItem label="검사결과" />
      <MenuItem label="공지사항" />
      <MenuItem label="자주 묻는 질문" />
    </Menu>
  );
};
