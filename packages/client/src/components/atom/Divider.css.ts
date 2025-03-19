import { createVar, style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import theme from "~/styles/theme.css";

export const vars = {
  size: createVar(),
};

export const divider = recipe({
  base: {
    display: "flex",
    alignItems: "center",

    selectors: {
      "&:before, &:after": {
        content: "",
        flexGrow: 1,
        flexBasis: 0,
        backgroundColor: theme.border.main,
      },
    },
  },

  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row",
        width: "100%",
        marginInline: "auto",
        marginBlock: vars.size,

        selectors: {
          "&:before, &:after": {
            height: "1px",
            minWidth: 0,
          },
        },
      },
      vertical: {
        flexDirection: "column",
        height: "100%",
        marginInline: vars.size,
        marginBlock: "auto",

        selectors: {
          "&:before, &:after": {
            width: "1px",
            minHeight: 0,
          },
        },
      },
    },
  },
});

export const content = style({
  flexGrow: 0,
  flexBasis: "auto",
});

export type DividerVariants = NonNullable<RecipeVariants<typeof divider>>;
