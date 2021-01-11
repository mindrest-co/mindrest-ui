import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { Avatar, AvatarProps } from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "김심심",
  role: "director",
};

export const WithName = (args: AvatarProps) => {
  args.name = "김심심";
  return (
    <Container>
      <Avatar {...args} />
      <Avatar {...args} size="large" />
      <Avatar {...args} size="medium" />
      <Avatar {...args} size="small" />
    </Container>
  );
};

export const WithOutName = (args: AvatarProps) => {
  return (
    <Container>
      <Avatar {...args} />
      <Avatar {...args} size="large" />
      <Avatar {...args} size="medium" />
      <Avatar {...args} size="small" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  & > div + div {
    margin-left: 30px;
  }
`;
