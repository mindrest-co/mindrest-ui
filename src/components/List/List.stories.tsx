import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";

import { List } from "./List";
import { ListAccordion } from "./ListAccordion";
import { ListItem } from "./ListItem";

export default {
  title: "Components/List",
  component: List,
} as Meta;

const itemsArray = [
  { title: "홍길동(M 24)", subtitle: "123456789" },
  { title: "홍길동(M 24)", subtitle: "123456789" },
  { title: "홍길동(M 24)", subtitle: "123456789" },
  { title: "홍길동(M 24)", subtitle: "123456789" },
];

export const Default = () => {
  const [actived, setActived] = useState(false);
  const [select, setSelect] = useState(0);
  const onItemClick = (id: number) => {
    setSelect(id);
  };

  const renderHeader = () => (
    <ListAccordion
      title="👨🏻‍⚕️ 홍길동 선생님"
      onClick={() => setActived(prev => !prev)}
      actived={actived}
    />
  );

  const renderItems = () =>
    itemsArray.map((item, index) => (
      <ListItem
        title={item.title}
        subtitle={item.subtitle}
        actived={index === select}
        onClick={() => onItemClick(index)}
      />
    ));

  return (
    <List header={renderHeader()} actived={actived}>
      {renderItems()}
    </List>
  );
};
