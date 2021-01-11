import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { Badge, BadgeProps } from "./Badge";
import { StatusBadge } from "./StatusBadge";
import { RoleBadge } from "./RoleBadge";

export default {
  title: "Components/Badge",
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = args => (
  <Vertical>
    <Badge {...args} />
  </Vertical>
);

export const Default = Template.bind({});
Default.args = {
  children: "1",
};

export const BasicUsage = () => {
  return (
    <Vertical>
      <Badge>1</Badge>
      <Badge>10</Badge>
      <Badge>N</Badge>
    </Vertical>
  );
};

export const PillBadge = (args: BadgeProps) => {
  args.type = "pill";
  return (
    <Vertical>
      <Badge {...args}>광화문숲 정신건강의학과</Badge>
      <Badge {...args}>광화문숲</Badge>
      <Badge {...args}>정신건강의학과</Badge>
    </Vertical>
  );
};

export const RoleBadges = () => {
  return (
    <Vertical>
      <div>
        <Title>Small</Title>
        <Horizontal>
          <RoleBadge size="small" role="director" />
          <RoleBadge size="small" role="doctor" />
          <RoleBadge size="small" role="nurse" />
        </Horizontal>
      </div>
      <div>
        <Title>XSmall</Title>
        <Horizontal>
          <RoleBadge role="director" />
          <RoleBadge role="doctor" />
          <RoleBadge role="nurse" />
        </Horizontal>
      </div>
    </Vertical>
  );
};

export const StatusBadges = () => {
  return (
    <Vertical>
      <div>
        <Title>Small</Title>
        <Horizontal>
          <StatusBadge size="small" status="weight" />
          <StatusBadge size="small" status="ing" />
          <StatusBadge size="small" status="done" />
          <StatusBadge size="small" status="none" />
        </Horizontal>
      </div>
      <div>
        <Title>XSmall</Title>
        <Horizontal>
          <StatusBadge status="weight" />
          <StatusBadge status="ing" />
          <StatusBadge status="done" />
          <StatusBadge status="none" />
        </Horizontal>
      </div>
    </Vertical>
  );
};

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > div + div {
    margin-top: 20px;
  }
`;

const Horizontal = styled.div`
  display: flex;
  & > div + div {
    margin-left: 10px;
  }
`;

const Title = styled.div`
  margin-bottom: 5px;
`;
