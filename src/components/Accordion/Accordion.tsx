import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "../../styles/styles";
import { Icon } from "../Icon/Icon";
import { icons } from "../../styles/icons";

type SizeType = "large" | "medium" | "small";
type PositionType = "inside" | "outside";

export type AccordionProps = {
  title: string;
  actived?: boolean;
  disabled?: boolean;
  size?: SizeType;
  children: ReactNode;
  position?: PositionType;
  onHeaderClick?: () => void;
};

export const Accordion = ({
  title,
  actived = false,
  disabled = false,
  size = "medium",
  children,
  position = "outside",
  onHeaderClick = () => {},
}: AccordionProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);

  const toggleItems = useCallback(() => {
    if (childrenRef.current) {
      if (!actived) {
        childrenRef.current.style.maxHeight = "0px";
        if (position === "outside") {
          childrenRef.current.style.opacity = "0";
        }
      } else {
        childrenRef.current.style.maxHeight =
          childrenRef.current.scrollHeight + "px";
        if (position === "outside") {
          childrenRef.current.style.opacity = "1";
        }
      }
    }
  }, [childrenRef.current, actived, position]);

  useEffect(() => {
    toggleItems();
  }, [actived]);

  return (
    <Container>
      <Header
        actived={actived}
        disabled={disabled}
        size={size}
        onClick={onHeaderClick}
      >
        <Content>
          <Title>{title}</Title>
          <Arrow actived={actived}>
            <Icon name={icons.chevron.down} size={24} />
          </Arrow>
        </Content>
        {position === "inside" && (
          <Children ref={childrenRef} position={position}>
            {children}
          </Children>
        )}
      </Header>
      {position === "outside" && (
        <Children ref={childrenRef} position={position}>
          {children}
        </Children>
      )}
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
  border-radius: ${theme.spacing.lg}px;
  ${({ actived }) =>
    actived
      ? css`
          background-color: ${theme.color.white};
          ${theme.shadow.md};
        `
      : css`
          background-color: ${theme.color.gray6};
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

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div``;

const Arrow = styled.div<{ actived: boolean }>`
  transition: all 0.3s;
  ${({ actived }) =>
    actived &&
    css`
      transform: rotate(180deg);
    `}
`;

type ChildrenProps = {
  position: PositionType;
};

const Children = styled.div<ChildrenProps>`
  max-height: 0px;
  transition: all 0.2s;

  ${({ position }) =>
    position === "inside"
      ? css`
          overflow: hidden;
        `
      : css`
          opacity: 0;
        `}
`;

// style

const textSizes = {
  large: theme.typo.h3,
  medium: theme.typo.h4,
  small: theme.typo.h6,
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
