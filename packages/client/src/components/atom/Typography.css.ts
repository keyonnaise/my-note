import { createVar } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import theme from "~/styles/theme.css";

export const vars = {
  lineClamp: createVar(),
};

export const typography = recipe({
  base: {
    lineHeight: 1.5,

    selectors: {
      "& + &": {
        marginTop: "0.5lh",
      },
    },
  },
  variants: {
    color: {
      main: {
        color: theme.text.main,
      },
      sub: {
        color: theme.text.sub,
      },
      third: {
        color: theme.text.third,
      },

      info: {
        color: theme.info.main,
      },
      danger: {
        color: theme.danger.main,
      },
      success: {
        color: theme.success.main,
      },
      warning: {
        color: theme.warning.main,
      },
    },
    size: {
      "2xs": {
        fontSize: "10px",
      },
      xs: {
        fontSize: "12px",
      },
      sm: {
        fontSize: "14px",
      },
      md: {
        fontSize: "16px",
      },
      lg: {
        fontSize: "18px",
      },
      xl: {
        fontSize: "24px",
      },
      "2xl": {
        fontSize: "28px",
      },
      "3xl": {
        fontSize: "32px",
      },
      "4xl": {
        fontSize: "40px",
      },
      "5xl": {
        fontSize: "48px",
      },
      "6xl": {
        fontSize: "56px",
      },
    },
    weight: {
      thin: {
        fontWeight: 100,
      },
      extraLight: {
        fontWeight: 200,
      },
      light: {
        fontWeight: 300,
      },
      regular: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      semiBold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
      extraBold: {
        fontWeight: 800,
      },
      black: {
        fontWeight: 900,
      },
    },
    truncate: {
      true: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
    lineClamp: {
      true: {
        overflow: "hidden",
        display: "-webkit-box",
        height: calc.multiply(vars.lineClamp, "1lh"),
        WebkitLineClamp: vars.lineClamp,
        WebkitBoxOrient: "vertical",
        textWrap: "wrap",
      },
    },
  },
});

export type TypographyVariants = NonNullable<RecipeVariants<typeof typography>>;
