import { css } from "@emotion/react";
import { reset } from "./reset";
import { text, typography } from "./styles";
import "./font.css";

export const globalStyle = css`
  ${reset};

  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat", ${typography.type.primary};
    font-size: ${text.b4.size};
    font-weight: ${text.b4.weight};
    color: ${typography.color.basic};
    line-height: normal;
  }
`;
