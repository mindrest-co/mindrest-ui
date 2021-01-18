import { css } from "@emotion/react";
import { reset } from "./reset";
import { theme } from "./styles";
import "./fonts.css";

export const globalStyle = css`
  ${reset};

  * {
    box-sizing: border-box;
  }
  body {
    font-family: ${theme.typography.type.primary};
    ${theme.typo.b4};
    color: ${theme.typography.color.basic};
    line-height: normal;
  }
`;
