import { createGlobalTheme, createTheme, createThemeContract } from "@vanilla-extract/css";
import { P, match } from "ts-pattern";
import palette from "./palette";

const common = createGlobalTheme(":root", {
  elevation: {
    fab: "50",
    appBar: "100",
    drawer: "200",
    modal: "300",
    snackbar: "400",
    tooltip: "500",
  },
  dim: {
    thin: setAlphaToHex(palette.black, 0.4),
    basic: setAlphaToHex(palette.black, 0.6),
    thick: setAlphaToHex(palette.black, 0.8),
  },
  radii: {
    none: "0",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "32px",
    xl: "64px",
    full: "9999px",
  },
  shadows: {
    xs: [`0 2px 2px 0 ${setAlphaToHex(palette.black, 0.1)}`, `0 4px 8px 2px ${setAlphaToHex(palette.black, 0.05)}`].join(", "),
    sm: [`0 4px 4px -2px ${setAlphaToHex(palette.black, 0.1)}`, `0 8px 16px 4px ${setAlphaToHex(palette.black, 0.05)}`].join(", "),
    md: [`0 6px 6px -3px ${setAlphaToHex(palette.black, 0.1)}`, `0 12px 24px 6px ${setAlphaToHex(palette.black, 0.05)}`].join(", "),
    lg: [`0 8px 8px -4px ${setAlphaToHex(palette.black, 0.1)}`, `0 16px 32px 8px ${setAlphaToHex(palette.black, 0.05)}`].join(", "),
    xl: [`0 10px 10px -5px ${setAlphaToHex(palette.black, 0.1)}`, `0 20px 40px 10px ${setAlphaToHex(palette.black, 0.05)}`].join(", "),
  },
  weights: {
    thin: "100",
    extraLight: "200",
    light: "300",
    regular: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    extraBold: "800",
    black: "900",
  },
});

const colors = createThemeContract({
  primary: {
    main: null,
    hover: null,
    focus: null,
    active: null,
    disabled: null,
  },
  neutral: {
    main: null,
    hover: null,
    focus: null,
    active: null,
    disabled: null,
  },
  dark: {
    main: null,
    hover: null,
    focus: null,
    active: null,
    disabled: null,
  },
  light: {
    main: null,
    hover: null,
    focus: null,
    active: null,
    disabled: null,
  },
  info: {
    main: null,
    hover: null,
    focus: null,
    active: null,
    disabled: null,
  },
  danger: {
    main: null,
    hover: null,
    focus: null,
    active: null,
    disabled: null,
  },
  success: {
    main: null,
    hover: null,
    focus: null,
    active: null,
    disabled: null,
  },
  warning: {
    main: null,
    hover: null,
    focus: null,
    active: null,
    disabled: null,
  },
  text: {
    main: null,
    sub: null,
    third: null,
  },
  background: {
    main: null,
    sub: null,
    elevated: null,
    groupedBase: null,
    groupedContent: null,
  },
  border: {
    main: null,
    dark: null,
    light: null,
  },
});

const theme = { ...common, ...colors };

export const darkTheme = createTheme(colors, {
  primary: generateColorTokens("dark", palette.primary),
  neutral: generateColorTokens("dark", palette.gray[100]),
  dark: generateColorTokens("dark", palette.black),
  light: generateColorTokens("dark", palette.white),
  info: generateColorTokens("dark", palette.indigo[600]),
  danger: generateColorTokens("dark", palette.red[600]),
  success: generateColorTokens("dark", palette.green[500]),
  warning: generateColorTokens("dark", palette.yellow[500]),

  text: {
    main: palette.gray[100],
    sub: palette.gray[200],
    third: palette.gray[300],
  },
  background: {
    main: palette.gray[950],
    sub: palette.gray[900],
    elevated: palette.gray[800],
    groupedBase: palette.black,
    groupedContent: palette.gray[950],
  },
  border: {
    main: setAlphaToHex(palette.gray[50], 0.3),
    dark: setAlphaToHex(palette.gray[950], 0.3),
    light: setAlphaToHex(palette.gray[50], 0.3),
  },
});

export const lightTheme = createTheme(colors, {
  primary: generateColorTokens("light", palette.primary),
  neutral: generateColorTokens("light", palette.gray[900]),
  dark: generateColorTokens("light", palette.black),
  light: generateColorTokens("light", palette.white),
  info: generateColorTokens("light", palette.indigo[600]),
  danger: generateColorTokens("light", palette.red[600]),
  success: generateColorTokens("light", palette.green[500]),
  warning: generateColorTokens("light", palette.yellow[500]),

  text: {
    main: palette.gray[900],
    sub: palette.gray[800],
    third: palette.gray[700],
  },
  background: {
    main: palette.gray[50],
    sub: palette.gray[100],
    elevated: palette.white,
    groupedBase: palette.gray[200],
    groupedContent: palette.white,
  },
  border: {
    main: setAlphaToHex(palette.gray[950], 0.3),
    dark: setAlphaToHex(palette.gray[950], 0.3),
    light: setAlphaToHex(palette.gray[50], 0.3),
  },
});

// Utils
type Mode = "dark" | "light";
type RGBA = [number, number, number, number];

function generateColorTokens(mode: Mode, hex: string) {
  const monochrome = getMonochromeColor(mode, hex);

  return {
    main: hex,
    hover: setAlphaToHex(hex, 0.05),
    focus: setAlphaToHex(hex, 0.1),
    active: setAlphaToHex(hex, 0.15),
    disabled: setAlphaToHex(monochrome, 0.25),
  };
}

function getMonochromeColor(mode: Mode, hex: string) {
  return match([mode, hex])
    .with([P.any, palette.black], ([_, hex]) => hex)
    .with([P.any, palette.white], ([_, hex]) => hex)
    .with(["dark", P.any], () => palette.white)
    .with(["light", P.any], () => palette.black)
    .exhaustive();
}

function setAlphaToHex(hex: string, a: number = 1) {
  return `rgba(${convertHexToRGBA(hex, a).join(", ")})`;
}

function convertHexToRGBA(hex: string, a: number = 1): RGBA {
  if (!/^#([0-9a-f]{3}){1,2}$/i.test(hex)) {
    throw new Error("유효하지 않은 16진수 코드입니다. 3자리 또는 6자리의 16진수 값만 입력해주세요.");
  }

  if (a < 0 || a > 1) {
    throw new Error("유효하지 않은 투명도입니다. 투명도는 0 부터 1 사이의 값으로 입력해야 합니다.");
  }

  let r, g, b;

  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }

  return [r, g, b, a];
}

export default theme;
