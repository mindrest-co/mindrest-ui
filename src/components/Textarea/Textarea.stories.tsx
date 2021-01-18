import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";

import { Textarea } from "./Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
} as Meta;

export const Default = () => {
  const [value, setValue] = useState("");
  const onValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  return (
    <Textarea
      placeholder="내용을 입력해주세요."
      value={value}
      onChange={onValueChange}
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState("");
  const onValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  return (
    <Textarea
      placeholder="내용을 입력해주세요."
      value={value}
      onChange={onValueChange}
      disabled={true}
    />
  );
};
