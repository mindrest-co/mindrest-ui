import React from "react";
import styled from "@emotion/styled";
import { Icon } from "../Icon/Icon";
import { theme } from "../../styles/styles";
import { css } from "@emotion/react";
import { icons } from "../../styles/icons";

export type CheckboxProps = {
  label: string;
  actived?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const Checkbox = ({
  label,
  actived = false,
  disabled = false,
  onClick = () => {},
}: CheckboxProps) => {
  return (
    <Container disabled={disabled} onClick={onClick}>
      <Box>
        {actived && <Icon size={28} name={icons.checkbox.active} />}
        {!actived && <Icon size={28} name={icons.checkbox.inactive} />}
      </Box>
      <Label>{label}</Label>
    </Container>
  );
};

type ContainerProps = {
  disabled: boolean;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;
  user-select: none;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.3;
    `}
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  margin-left: ${theme.spacing.md}px;
  color: ${theme.color.gray1};
  ${theme.typo.b1};
`;
