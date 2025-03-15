import { style } from "@vanilla-extract/css";
import theme from "~/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100dvh",
  color: `${theme.text.main}`,
  background: `${theme.background.main}`,
});
