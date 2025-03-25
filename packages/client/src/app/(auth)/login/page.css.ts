import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
});

export const content = style({
  flexGrow: 1,
  flexBasis: 0,
  minWidth: 0,

  maxWidth: "384px",
  marginInline: "24px",
  textAlign: "center",
});
