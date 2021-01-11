import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { CardList, CardListProps } from "./CardList";

export default {
  title: "Components/CardList",
  component: CardList,
} as Meta;

const Template: Story<CardListProps> = args => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "2020. 12. 4일에 진행 예정된 검사",
  items: [
    {
      image: "/assets/images/person.jpg",
      title: "광화문숲 정신건강의학과",
      subtitle: "이정석 선생님",
    },
    {
      image: "/assets/images/person.jpg",
      title: "광화문숲 정신건강의학과",
      subtitle: "이정석 선생님",
    },
  ],
};
