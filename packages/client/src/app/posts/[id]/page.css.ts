import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import media, { breakpoints } from "~/styles/media.css";
import theme from "~/styles/theme.css";

export const main = style({
  position: "relative",
  flexGrow: 1,
  flexBasis: 0,
  minHeight: 0,
});

export const cover = style([
  {
    display: "flex",
    alignItems: "flex-end",
    height: "512px",
    borderBottom: `1px solid ${theme.border.main}`,
  },
]);

export const content = style([
  {
    width: `min(${breakpoints.xs}px, ${calc.subtract("100%", "24px")})`,
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

export const date = style({});
