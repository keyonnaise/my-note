import * as styles from "./Spacer.css";
import type { SpacerVariants } from "./Spacer.css";

type Width = SpacerVariants["x"];
type Height = SpacerVariants["y"];

interface Props {
  x?: Width;
  y?: Height;
}

function Spacer({ x = 4, y = 4 }: Props) {
  return <span className={styles.spacer({ x, y })} />;
}

export default Spacer;
