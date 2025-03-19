import clsx from "clsx";
import { TypographyVariants, typography } from "./Typography.css";

type As = "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type Size = TypographyVariants["size"];
type Weight = TypographyVariants["weight"];

interface Props {
  as?: As;
  size?: Size;
  weight?: Weight;
  children?: React.ReactNode;
}

function Typography({ as = "p", size: _size, weight = "regular", children }: Props) {
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

  return <El className={clsx(typography({ size, weight }))}>{children}</El>;
}

export default Typography;
