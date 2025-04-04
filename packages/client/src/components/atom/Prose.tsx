import clsx from "clsx";
import * as styles from "./Prose.css";

interface Props {
  dangerouslySetInnerHTML?: {
    __html: string | TrustedHTML;
  };
}

function Prose({ dangerouslySetInnerHTML }: Props) {
  return (
    <div className={clsx(styles.container)} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
  );
}

export default Prose;
