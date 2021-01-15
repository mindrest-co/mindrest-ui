import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import { Modal, ModalProps } from "./Modal";
import { Button } from "../Button/Button";
import { text } from "../../common/styles";

export default {
  title: "Components/Modal",
  component: Modal,
  args: {
    actived: true,
  },
} as Meta;

export const Default = (args: ModalProps) => {
  return (
    <Modal {...args}>
      <ModalBody>
        <ModalTitle>모달의 제목입니다</ModalTitle>
        <ModalContent>모달의 내용입니다.</ModalContent>
        <Button label="Click me" size="full" />
      </ModalBody>
    </Modal>
  );
};

const ModalBody = styled.div`
  width: 400px;
`;

const ModalTitle = styled.div`
  font-size: ${text.h3.size}px;
  font-weight: ${text.h3.weight};
  margin-bottom: 10px;
`;

const ModalContent = styled.div`
  font-size: ${text.b3.size}px;
  font-weight: ${text.b3.weight};
  margin-bottom: 70px;
`;
