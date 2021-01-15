import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, shadows, spacing, text } from "../../common/styles";
import { animations } from "../../common/animations";

type SizeType = "large" | "medium" | "small";

export type AccordionProps = {
  title: string;
  actived?: boolean;
  disabled?: boolean;
  size?: SizeType;
  children: ReactNode;
};

export const Accordion = ({
  title,
  actived = false,
  disabled = false,
  size = "medium",
  children,
}: AccordionProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);

  const toggleItems = useCallback(() => {
    if (childrenRef.current) {
      if (!actived) {
        childrenRef.current.style.maxHeight = "0px";
        childrenRef.current.style.opacity = "0";
      } else {
        childrenRef.current.style.maxHeight =
          childrenRef.current.scrollHeight + "px";
        childrenRef.current.style.opacity = "1";
      }
    }
  }, [childrenRef.current, actived]);

  useEffect(() => {
    toggleItems();
  }, [actived]);

  return (
    <Container>
      <Header actived={actived} disabled={disabled} size={size}>
        <Title>{title}</Title>
      </Header>
      <Children ref={childrenRef}>{children}</Children>
    </Container>
  );
};

const Container = styled.div``;

type HeaderProps = {
  actived: boolean;
  disabled: boolean;
  size: SizeType;
};

const Header = styled.div<HeaderProps>`
  border-radius: ${spacing.l}px;
  ${({ actived }) =>
    actived
      ? css`
          background-color: ${colors.white};
          ${shadows.m};
        `
      : css`
          background-color: ${colors.gray6};
        `}

  ${({ size }) => textSizes[size]};
  ${({ size }) => containerPaddings[size]};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
    `}
`;

const Title = styled.div``;

const Children = styled.div`
  max-height: 0px;
  opacity: 0;
  transition: all 0.2s;
  margin-top: ${spacing.m}px;
`;

// style

const textSizes = {
  large: css`
    font-size: ${text.h3.size}px;
    font-weight: ${text.h3.weight};
  `,
  medium: css`
    font-size: ${text.h4.size}px;
    font-weight: ${text.h4.weight};
  `,
  small: css`
    font-size: ${text.h6.size}px;
    font-weight: ${text.h6.weight};
  `,
};

const containerPaddings = {
  large: css`
    padding: 42px;
  `,
  medium: css`
    padding: 32px;
  `,
  small: css`
    padding: 16px;
  `,
};
