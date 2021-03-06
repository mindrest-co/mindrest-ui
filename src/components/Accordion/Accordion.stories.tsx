import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { Accordion, AccordionProps } from "./Accordion";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { theme } from "../../styles/styles";

export default {
  title: "Components/Accordion",
  component: Accordion,
  args: {
    title: "제목 입니다.",
  },
} as Meta;

const Template: Story<AccordionProps> = args => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "test",
};

export const WithToggleButtonVertical = () => {
  const [actived, setActived] = useState(true);
  const onHeaderClick = () => {
    setActived(prev => !prev);
  };
  return (
    <Accordion
      actived={actived}
      onHeaderClick={onHeaderClick}
      title="질문 입니다."
    >
      <Container>
        <ToggleButton items={["1번", "2번", "3번"]} select={1} />
      </Container>
    </Accordion>
  );
};

export const WithToggleButtonHorizontal = () => {
  const [actived, setActived] = useState(true);
  const onHeaderClick = () => {
    setActived(prev => !prev);
  };
  return (
    <Accordion
      actived={actived}
      onHeaderClick={onHeaderClick}
      title="질문 입니다."
    >
      <Container>
        <ToggleButton
          items={["1번", "2번", "3번"]}
          select={1}
          direction="horizontal"
        />
      </Container>
    </Accordion>
  );
};

export const Notice = () => {
  const [actived, setActived] = useState(true);
  const onHeaderClick = () => {
    setActived(prev => !prev);
  };
  return (
    <Accordion
      actived={actived}
      onHeaderClick={onHeaderClick}
      title="공지 사항 입니다."
      position="inside"
    >
      <NoticeBody>
        <NoticeContent>
          공지사항 내용입니다. 공지사항의 내용입니다. 공지사항 내용입니다.
          공지사항의 내용입니다. 공지사항 내용입니다. 공지사항의 내용입니다.
          공지사항 내용입니다. 공지사항의 내용입니다.
        </NoticeContent>
      </NoticeBody>
    </Accordion>
  );
};

const Container = styled.div`
  margin-top: 8px;
`;

const NoticeBody = styled.div`
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid ${theme.color.gray5};
`;

const NoticeContent = styled.div`
  ${theme.typo.b3};
  color: ${theme.color.gray2};
`;
