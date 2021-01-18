import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";
import { css } from "@emotion/react";

export type DropdownProps = {
  items: string[];
  select: number;
  onClick: (id: number) => void;
};

export const Dropdown = ({ items, select, onClick }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [actived, setActived] = useState(false);

  const toggleItems = () => {
    setActived(prev => !prev);
  };

  const closeItems = () => {
    setActived(false);
  };

  useEffect(() => {
    const onWindowClick = ({ target }: any) => {
      if (actived && !dropdownRef.current?.contains(target)) {
        closeItems();
      }
    };
    window.addEventListener("click", onWindowClick);
    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  }, [actived, dropdownRef.current, closeItems]);

  return (
    <Container ref={dropdownRef}>
      <DropBox actived={actived} onClick={toggleItems}>
        <SelectItem>{items[select]}</SelectItem>
      </DropBox>
      {actived && (
        <Items onClick={closeItems}>
          {items.map((item, index) => (
            <Item key={`${item}-${index}`} onClick={() => onClick(index)}>
              {item}
            </Item>
          ))}
        </Items>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const SelectItem = styled.div``;

type DropBoxProps = {
  actived: boolean;
};

const DropBox = styled.div<DropBoxProps>`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 24px;

  color: ${theme.color.gray2};
  background-color: ${theme.color.gray7};
  border: 1px solid ${theme.color.gray3};
  border-radius: ${theme.radius.md}px;

  ${({ actived }) =>
    actived &&
    css`
      border-color: ${theme.color.blue};
    `}
`;

const Items = styled.ul`
  width: 100%;
  position: absolute;
  top: 78px;
  z-index: 100;

  & > div {
    border-left: 1px solid ${theme.color.gray5};
    border-right: 1px solid ${theme.color.gray5};
    border-top: 1px solid ${theme.color.gray5};
  }

  & > div:first-child {
    border-top-left-radius: ${theme.radius.md}px;
    border-top-right-radius: ${theme.radius.md}px;
  }
  & > div:last-child {
    border-bottom-left-radius: ${theme.radius.md}px;
    border-bottom-right-radius: ${theme.radius.md}px;
    border-bottom: 1px solid ${theme.color.gray5};
  }
`;

const Item = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  padding-left: 24px;

  color: ${theme.color.gray1};
  background-color: ${theme.color.gray7};

  ${theme.typo.b4};

  &:hover {
    background-color: ${theme.color.blueLight1};
  }
`;
