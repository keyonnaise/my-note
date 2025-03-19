"use client";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { spacing } from "~/styles/tokens";
import * as styles from "./Divider.css";
import type { DividerVariants } from "./Divider.css";

type Orientation = DividerVariants["orientation"];

interface Props {
  orientation?: Orientation;
  space?: keyof typeof spacing;
}

function Divider({ orientation = "horizontal", space = 4 }: Props) {
  return (
    <div
      style={assignInlineVars({
        [styles.vars.size]: spacing[space],
      })}
      className={clsx(styles.divider({ orientation }))}
    />
  );
}

export default Divider;
