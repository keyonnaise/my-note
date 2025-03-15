import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import media, { breakpoints } from "~/styles/media.css";

export const header = style({
  position: "relative",
  flexGrow: 0,
  flexBasis: "auto",
});

export const main = style({
  position: "relative",
  flexGrow: 1,
  flexBasis: 0,
  minHeight: 0,
});

export const footer = style({
  position: "relative",
  flexGrow: 0,
  flexBasis: "auto",
});

export const content = style([
  {
    width: `min(${breakpoints.xs}px. ${calc.subtract("100%", "24px")})`,
    paddingBlock: "80px",
    marginInline: "auto",
  },

  media("sm", {
    width: `${breakpoints.xs}px`,
  }),

  media("md", {
    width: `${breakpoints.sm}px`,
  }),

  media("lg", {
    width: `${breakpoints.md}px`,
  }),

  media("xl", {
    width: `${breakpoints.lg}px`,
  }),
]);
