import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";

import { Typography, TypographyProps } from "./Typography";
import { theme, TypoType } from "../../styles/styles";

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
  h5: "Heading 5",
  h6: "Heading 6",
  b1: "Body 1",
  b2: "Body 2",
  b3: "Body 3",
  b4: "Body 4",
  captionTitle: "Caption Title",
  captionMedium: "Caption Medium",
  caption: "Caption",
  badge: "Badge",
};

export const Default = Template.bind({});
Default.args = {
  size: "h1",
  text: "Heading1",
};

export const All = () => {
  return (
    <Container>
      {Object.keys(theme.typo).map(size => (
        <Typography
          size={size as TypoType}
          text={TextContent[size as TypoType]}
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
