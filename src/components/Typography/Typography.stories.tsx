import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";

import { Typography, TypographyProps } from "./Typography";
import { text, TextType } from "../../common/styles";

export default {
  title: "Basic/Typography",
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = args => <Typography {...args} />;

const TextContent = {
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  b1: "Body 1",
  b2: "Body 2",
  b3: "Body 3",
  b4: "Body 4",
  captionTitle: "Caption title",
  caption: "Caption",
};

export const Default = Template.bind({});
Default.args = {
  size: text.h1.size,
  weight: text.h1.weight,
  text: "Heading1",
};

export const All = () => {
  return (
    <Container>
      {Object.keys(text).map(value => (
        <Typography
          size={text[value as TextType].size}
          weight={text[value as TextType].weight}
          text={TextContent[value as TextType]}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  & > div + div {
    margin-top: 30px;
  }
`;
