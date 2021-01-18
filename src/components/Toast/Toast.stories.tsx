import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { Toast, ToastProps } from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
  args: {
    text: "내용을 확인해주세요.",
  },
} as Meta;

const Template: Story<ToastProps> = args => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "토스트 메시지 입니다.",
  actived: true,
};
