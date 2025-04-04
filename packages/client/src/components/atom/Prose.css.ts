import { globalStyle, style } from "@vanilla-extract/css";
import theme from "~/styles/theme.css";

export const container = style({});

globalStyle(`${container} > h2`, {
  fontSize: "40px",
  fontWeight: theme.weights.extraBold,
  lineHeight: 1.4,
});

globalStyle(`${container} > h3`, {
  fontSize: "32px",
  fontWeight: theme.weights.extraBold,
  lineHeight: 1.4,
});

globalStyle(`${container} > h4`, {
  fontSize: "28px",
  fontWeight: theme.weights.bold,
  lineHeight: 1.6,
});

globalStyle(`${container} > h5`, {
  fontSize: "24px",
  fontWeight: theme.weights.bold,
  lineHeight: 1.6,
});

globalStyle(`${container} > h6`, {
  fontSize: "20px",
  fontWeight: theme.weights.bold,
  lineHeight: 1.6,
});

globalStyle(`${container} > p`, {
  fontSize: "16px",
  fontWeight: theme.weights.regular,
  lineHeight: 1.8,
});
