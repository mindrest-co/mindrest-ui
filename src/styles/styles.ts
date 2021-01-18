import { css } from "@emotion/react";

const color = {
  // Grayscale
  gray1: "#333333",
  gray2: "#4f4f4f",
  gray3: "#828282",
  gray4: "#bdbdbd",
  gray5: "#e0e0e0",
  gray6: "#f2f2f2",
  gray7: "#f9f9f9",
  gray8: "#fcfcfc",
  white: "#ffffff",
  // Bluescale
  blueDark2: "#274857",
  blueDark1: "#457e99",
  blue: "#62b4da",
  blueLight1: "#91cbe5",
  blueLight2: "#c0e1f0",
  blueLight3: "#eff8fb",
  // Greenscale
  greenDark2: "#10734f",
  greenDark1: "#1bbf83",
  green: "#35d48d",
  greenLight1: "#76e8ad",
  greenLight2: "#bbf4d6",
  greenLight3: "#f1fdf7",
  // Redscale
  redDark2: "#a92e32",
  redDark1: "#f24147",
  red: "#ff5d5d",
  redLight1: "#ff8e89",
  redLight2: "#ffd2d0",
  redLight3: "#fff4f3",
};

const typography = {
  type: {
    primary: '"Montserrat", "Noto Sans KR", sans-serif',
  },
  weight: {
    thine: 100,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  size: {
    h1: 45,
    h2: 34,
    h3: 26,
    h4: 20,
    h5: 18,
    h6: 16,
    b1: 26,
    b2: 20,
    b3: 18,
    b4: 16,
    captionTitle: 18,
    captionMedium: 14,
    caption: 14,
    badge: 12,
  },
  color: {
    basic: color.gray1,
    primary: color.blue,
    success: color.greenDark1,
    alert: color.redDark1,
  },
};

const typo = {
  h1: css`
    font-size: ${typography.size.h1}px;
    font-weight: ${typography.weight.bold};
  `,
  h2: css`
    font-size: ${typography.size.h2}px;
    font-weight: ${typography.weight.bold};
  `,
  h3: css`
    font-size: ${typography.size.h3}px;
    font-weight: ${typography.weight.bold};
  `,
  h4: css`
    font-size: ${typography.size.h4}px;
    font-weight: ${typography.weight.bold};
  `,
  h5: css`
    font-size: ${typography.size.h5}px;
    font-weight: ${typography.weight.bold};
  `,
  h6: css`
    font-size: ${typography.size.h6}px;
    font-weight: ${typography.weight.bold};
  `,
  b1: css`
    font-size: ${typography.size.b1}px;
    font-weight: ${typography.weight.medium};
  `,
  b2: css`
    font-size: ${typography.size.b2}px;
    font-weight: ${typography.weight.medium};
  `,
  b3: css`
    font-size: ${typography.size.b3}px;
    font-weight: ${typography.weight.regular};
  `,
  b4: css`
    font-size: ${typography.size.b4}px;
    font-weight: ${typography.weight.regular};
  `,
  captionTitle: css`
    font-size: ${typography.size.captionTitle}px;
    font-weight: ${typography.weight.medium};
  `,
  captionMedium: css`
    font-size: ${typography.size.captionMedium}px;
    font-weight: ${typography.weight.medium};
  `,
  caption: css`
    font-size: ${typography.size.caption}px;
    font-weight: ${typography.weight.regular};
  `,
  badge: css`
    font-size: ${typography.size.badge}px;
    font-weight: ${typography.weight.medium};
  `,
};

const radius = {
  squre: 0,
  sm: 4,
  md: 8,
  lg: 16,
  round: 20,
  circle: 100,
};

const opacity = {
  disabled: 0.3,
};

const shadow = {
  sm: css`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  `,
  md: css`
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  `,
  lg: css`
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  `,
};

const spacing = {
  xxs: 2,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 16,
  xl: 24,
  xxl: 32,
};

const width = {
  full: "100%",
};

// Type

export type ColorType = keyof typeof color;
export type TypoType = keyof typeof typo;

export const theme = {
  color,
  typography,
  typo,
  shadow,
  radius,
  opacity,
  spacing,
  width,
};
