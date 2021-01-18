import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";

import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export default {
  title: "Components/Menu",
  component: Menu,
} as Meta;

const menuItems = ["검사하기", "검사결과", "공지사항", "자주 묻는 질문"];

export const Default = () => {
  const [select, setSelect] = useState(0);
  const onItemClick = (id: number) => {
    setSelect(id);
  };

  const renderItems = () =>
    menuItems.map((item, index) => (
      <MenuItem
        label={item}
        actived={index === select}
        onClick={() => onItemClick(index)}
      />
    ));

  return <Menu>{renderItems()}</Menu>;
};
