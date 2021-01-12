import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, text } from "../../common/styles";
import { Avatar } from "../Avatar/Avatar";
import { Badge } from "../Badge/Badge";

export type ListItemProps = {
  avatar?: string;
  title?: string;
  subtitle?: string;
  actived?: boolean;
  notice?: boolean;
};

const defaultImage = "/assets/images/person.jpg";

export const ListItem = ({
  avatar = defaultImage,
  title,
  subtitle,
  actived = false,
  notice = false,
}: ListItemProps) => {
  return (
    <Container actived={actived}>
      {actived && <ActiveBar />}
      {avatar && <Avatar size="small" />}
      {title && <Title actived={actived}>{title}</Title>}
      {subtitle && <Subtitle actived={actived}>{subtitle}</Subtitle>}
      {notice && (
        <Notice>
          <Badge>{"N"}</Badge>
        </Notice>
      )}
    </Container>
  );
};

type ContainerProps = {
  actived: boolean;
};

const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  padding-left: 24px;

  ${({ actived }) =>
    actived
      ? css`
          background-color: ${colors.gray5};
          color: ${colors.gray2};
        `
      : css`
          background-color: ${colors.gray7};
          color: ${colors.gray3};
        `}
`;
const ActiveBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: ${colors.blue};
`;

const Title = styled.div<ContainerProps>`
  margin-left: 8px;
  font-size: ${text.h5.size}px;
  font-weight: ${text.h5.weight};
  color: ${({ actived }) => (actived ? colors.gray2 : colors.gray3)};
`;

const Subtitle = styled.div<ContainerProps>`
  margin-left: 4px;
  font-size: ${text.h5.size}px;
  font-weight: ${text.h5.weight};
  color: ${({ actived }) => (actived ? colors.gray3 : colors.gray4)};
`;

const Notice = styled.div`
  margin-left: auto;
  margin-right: 24px;
`;
