import clsx from "clsx";
import * as styles from "./page.css";

export default function Home() {
  return (
    <>
      <header className={clsx(styles.header)}>header</header>
      <main className={clsx(styles.main)}>
        <div className={clsx(styles.content)}>
          <div>포스트 카테고리</div>
          <div>최신 포스트</div>
        </div>
      </main>
      <footer className={clsx(styles.footer)}>footer</footer>
    </>
  );
}
