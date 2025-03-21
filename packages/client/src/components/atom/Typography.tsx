"use client";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import * as styles from "./Typography.css";
import { TypographyVariants } from "./Typography.css";

type As = "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type Color = TypographyVariants["color"];
type Size = TypographyVariants["size"];
type Weight = TypographyVariants["weight"];

interface Props {
  as?: As;
  color?: Color;
  size?: Size;
  weight?: Weight;
  truncate?: boolean;
  lineClamp?: number;
  children?: React.ReactNode;
}

function Typography({
  as = "p",
  color,
  size: _size,
  weight = "regular",
  truncate,
  lineClamp,
  children,
}: Props) {
  const TEXT_SIZES: Record<As, Size> = {
    h2: "5xl",
    h3: "4xl",
    h4: "3xl",
    h5: "2xl",
    h6: "xl",
    p: "md",
  };

  const El = as;
  const size = _size || TEXT_SIZES[as];

  return (
    <El
      style={assignInlineVars({
        [styles.vars.lineClamp]: `${lineClamp}`,
      })}
      className={clsx(
        styles.typography({
          color,
          size,
          weight,
          truncate,
          lineClamp: lineClamp !== undefined,
        }),
      )}
    >
      {children}
    </El>
  );
}

export default Typography;
