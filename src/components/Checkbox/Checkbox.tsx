import React from "react";
import styled from "@emotion/styled";
import { Icon } from "../Icon/Icon";
import { theme } from "../../styles/styles";
import { css } from "@emotion/react";

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
    <Container onClick={onClick} disabled={disabled}>
      <Box actived={actived}>
        {actived && <Icon size={24} color={theme.color.white} />}
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

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
    `}
`;

type BoxProps = {
  actived: boolean;
};

const Box = styled.div<BoxProps>`
  width: 28px;
  height: 28px;
  border-radius: ${theme.spacing.xs}px;

  ${({ actived }) =>
    actived
      ? css`
          background-color: ${theme.color.blue};
        `
      : css`
          background-color: ${theme.color.white};
          border: 2px solid ${theme.color.gray3};
        `}

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  margin-left: ${theme.spacing.md}px;
  color: ${theme.color.gray1};
  ${theme.typo.b1};
`;
