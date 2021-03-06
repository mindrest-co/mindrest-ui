import React, { ReactNode, useEffect, useRef } from "react";
import styled from "@emotion/styled";

export type ListProps = {
  header: ReactNode;
  children: ReactNode;
  actived?: boolean;
};

export const List = ({ header, children, actived = true }: ListProps) => {
  const itemsRef = useRef<HTMLDivElement>(null);

  const toggleItems = () => {
    if (itemsRef.current) {
      if (!actived) {
        itemsRef.current.style.maxHeight = "0px";
      } else {
        itemsRef.current.style.maxHeight = itemsRef.current.scrollHeight + "px";
      }
    }
  };

  useEffect(() => {
    toggleItems();
  }, [actived]);

  return (
    <Container>
      <Header>{header}</Header>
      <Items ref={itemsRef}>{children}</Items>
    </Container>
  );
};

const Container = styled.div`
  user-select: none;
`;

const Header = styled.div``;

const Items = styled.div`
  max-height: 0px;
  overflow: hidden;
  transition: all 0.3s ease-out;
`;
