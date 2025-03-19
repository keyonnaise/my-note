import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const typography = recipe({
  base: {
    selectors: {
      ["& + &"]: {
        marginTop: "0.5lh",
      },
    },
  },
  variants: {
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
  },
});

export type TypographyVariants = NonNullable<RecipeVariants<typeof typography>>;
