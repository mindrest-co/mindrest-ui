import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { CardList, CardListProps } from "./CardList";

export default {
  title: "Components/CardList",
  component: CardList,
} as Meta;

const Template: Story<CardListProps> = args => <CardList {...args} />;

const label = "2020. 12. 4일에 진행 예정된 검사";
const items = [
  {
    image: "/assets/images/person.jpg",
    title: "광화문숲 정신건강의학과",
    subtitle: "이정석 선생님",
    disabled: true,
  },
  {
    image: "/assets/images/person.jpg",
    title: "광화문숲 정신건강의학과",
    subtitle: "이정석 선생님",
  },
];

export const Default = Template.bind({});
Default.args = {
  label,
  items,
};

export const TwoList = () => {
  return (
    <>
      <CardList label={label} items={items} />
      <CardList label={label} items={items} />
    </>
  );
};
