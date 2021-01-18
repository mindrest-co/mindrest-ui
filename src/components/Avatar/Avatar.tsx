import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/styles";
import { RoleBadge, RoleType } from "../Badge/RoleBadge";

type SizeType = "xlarge" | "large" | "medium" | "small";

export type AvatarProps = {
  image?: string;
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
          {name && <Name size={size}>{name}</Name>}
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
    width: ${imageSizes[size]}px;
    height: ${imageSizes[size]}px;
    border-radius: ${imageSizes[size] / 2}px;
  `}
`;

type NameProps = {
  size: SizeType;
};

const Name = styled.div<NameProps>`
  ${({ size }) => textSizes[size]};
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

const imageSizes = {
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

const textSizes = {
  xlarge: theme.typo.h4,
  large: theme.typo.h5,
  medium: theme.typo.h5,
  small: theme.typo.h6,
};
