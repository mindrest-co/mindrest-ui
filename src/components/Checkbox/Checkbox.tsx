import React from "react";
import styled from "@emotion/styled";
import { Icon } from "../Icon/Icon";
import { colors, spacing, text } from "../../common/styles";
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
        {actived && <Icon size={24} color={colors.white} />}
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
  border-radius: ${spacing.xs}px;

  ${({ actived }) =>
    actived
      ? css`
          background-color: ${colors.blue};
        `
      : css`
          background-color: ${colors.white};
          border: 2px solid ${colors.gray3};
        `}

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  margin-left: ${spacing.m}px;
  font-size: ${text.b1.size}px;
  font-weight: ${text.b1.weight};
  color: ${colors.gray1};
`;
