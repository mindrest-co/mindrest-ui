import { css } from "@emotion/react";

// Global style variables
export const background = {
  app: "#F6F9FC",
  appInverse: "#7A8997",
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF",
};

export const colors = {
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

export const typography = {
  type: {
    primary: '"Noto Sans KR", sans-serif',
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
    basic: colors.gray1,
    primary: colors.blue,
    success: colors.greenDark1,
    alert: colors.redDark1,
  },
};

export const text = {
  h1: {
    size: typography.size.h1,
    weight: typography.weight.bold,
  },
  h2: {
    size: typography.size.h2,
    weight: typography.weight.bold,
  },
  h3: {
    size: typography.size.h3,
    weight: typography.weight.bold,
  },
  h4: {
    size: typography.size.h4,
    weight: typography.weight.bold,
  },
  h5: {
    size: typography.size.h5,
    weight: typography.weight.bold,
  },
  h6: {
    size: typography.size.h6,
    weight: typography.weight.bold,
  },
  b1: {
    size: typography.size.b1,
    weight: typography.weight.medium,
  },
  b2: {
    size: typography.size.b2,
    weight: typography.weight.medium,
  },
  b3: {
    size: typography.size.b3,
    weight: typography.weight.regular,
  },
  b4: {
    size: typography.size.b4,
    weight: typography.weight.regular,
  },
  captionTitle: {
    size: typography.size.captionTitle,
    weight: typography.weight.medium,
  },
  captionMedium: {
    size: typography.size.captionMedium,
    weight: typography.weight.medium,
  },
  caption: {
    size: typography.size.caption,
    weight: typography.weight.regular,
  },
  badge: {
    size: typography.size.badge,
    weight: typography.weight.medium,
  },
};

export const breakpoint = 600;
export const pageMargin = 5.55555;

// export const pageMargins = css`
//   padding: 0 ${spacing.padding.medium}px;
//   @media (min-width: ${breakpoint * 1}px) {
//     margin: 0 ${pageMargin * 1}%;
//   }
//   @media (min-width: ${breakpoint * 2}px) {
//     margin: 0 ${pageMargin * 2}%;
//   }
//   @media (min-width: ${breakpoint * 3}px) {
//     margin: 0 ${pageMargin * 3}%;
//   }
//   @media (min-width: ${breakpoint * 4}px) {
//     margin: 0 ${pageMargin * 4}%;
//   }
// `;

export const radius = {
  squre: 0,
  small: 4,
  medium: 8,
  large: 16,
  round: 20,
  circle: 100,
};

export const opacity = {
  disabled: 0.3,
};

export const shadows = {
  s: css`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  `,
  m: css`
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  `,
  l: css`
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  `,
};

export const spacing = {
  xxs: 2,
  xs: 4,
  s: 6,
  m: 8,
  l: 16,
  xl: 24,
  xxl: 32,
};

export const width = {
  full: "100%",
};

// Type
export type ColorType = keyof typeof colors;
export type TextType = keyof typeof text;
