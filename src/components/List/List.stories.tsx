import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";

import { List } from "./List";
import { ListAccordion } from "./ListAccordion";
import { ListItem } from "./ListItem";

export default {
  title: "Components/List",
  component: List,
} as Meta;

const renderListItem = (actived?: boolean) => (
  <ListItem title="홍길동(M 24)" subtitle="123456789" actived={actived} />
);

export const Default = () => {
  const [actived, setActived] = useState(false);
  return (
    <List
      header={
        <ListAccordion
          title="👨🏻‍⚕️ 홍길동 선생님"
          onClick={() => setActived(prev => !prev)}
          actived={actived}
        />
      }
      items={
        <>
          {renderListItem(true)}
          {renderListItem()}
          {renderListItem()}
          {renderListItem()}
        </>
      }
      actived={actived}
    />
  );
};
