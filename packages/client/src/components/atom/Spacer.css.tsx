import { StyleRule } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { spacing } from "~/styles/tokens";

export const spacer = recipe({
  base: {
    display: "block",
  },

  variants: {
    x: Object.entries(spacing).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          width: value,
        },
      }),
      {} as Record<keyof typeof spacing, StyleRule>,
    ),
    y: Object.entries(spacing).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          height: value,
        },
      }),
      {} as Record<keyof typeof spacing, StyleRule>,
    ),
  },
});

export type SpacerVariants = NonNullable<RecipeVariants<typeof spacer>>;
