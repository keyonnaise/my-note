import { style } from "@vanilla-extract/css";
import { spacing } from "~/styles/tokens";

export const container = style({});

export const item = style({
  display: "block",
  paddingBlock: spacing[8],

  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const header = style({});

export const body = style({});

export const info = style({
  display: "flex",
  gap: spacing[2],
  marginBlock: `${spacing[1]} ${spacing[2]}`,
  fontSize: "12px",
  textDecoration: "none !important",
});
