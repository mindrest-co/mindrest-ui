import React from "react";
import { Global } from "@emotion/react";
import { globalStyle } from "../src/styles/globalStyle";

// 모든 스토리에 스타일을 적용하기 위한 글로벌 decorator
export const decorators = [
  Story => (
    <>
      <Global styles={globalStyle} />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
