import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { text, TextType } from "../../common/styles";
import { RoleBadge, RoleType } from "../Badge/RoleBadge";

export type SizeType = "xlarge" | "large" | "medium" | "small";

export type AvatarProps = {
  image?: string;
  /**Size */
  size?: SizeType;
  name?: string;
  role?: RoleType | undefined;
};

const defaultImage = "/assets/images/person.jpg";

export const Avatar = ({
  image = defaultImage,
  size = "xlarge",
  name,
  role,
}: AvatarProps) => {
  return (
    <Container>
      <Image src={image} alt="avatar" size={size} />
      {(name || role) && (
        <Info size={size}>
          {name && <Name type={texts[size] as TextType}>{name}</Name>}
          {role && <RoleBadge role={role} />}
        </Info>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type ImageProps = {
  size: SizeType;
};

const Image = styled.img<ImageProps>`
  ${({ size }) => css`
    width: ${sizes[size]}px;
    height: ${sizes[size]}px;
    border-radius: ${sizes[size] / 2}px;
  `}
`;

type NameProps = {
  type: TextType;
};

const Name = styled.div<NameProps>`
  ${({ type }) => css`
    font-size: ${text[type].size}px;
    font-weight: ${text[type].weight};
  `}
`;

type InfoProps = {
  size: SizeType;
};

const Info = styled.div<InfoProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div + div {
    margin-left: 4px;
  }

  margin-top: ${({ size }) => margins[size]}px;
`;

const sizes = {
  xlarge: 100,
  large: 80,
  medium: 64,
  small: 40,
};

const margins = {
  xlarge: 8,
  large: 8,
  medium: 8,
  small: 4,
};

const texts = {
  xlarge: "h4",
  large: "h5",
  medium: "h5",
  small: "h6",
};
