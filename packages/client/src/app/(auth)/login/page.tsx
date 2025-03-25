import clsx from "clsx";
import type { Metadata } from "next";
import Spacer from "~/components/atom/Spacer";
import Typography from "~/components/atom/Typography";
import LoginForm from "./_components/LoginForm";
import * as styles from "./page.css";

export const metadata: Metadata = {
  title: "로그인",
};

export default function Login() {
  return (
    <main className={clsx(styles.container)}>
      <div className={clsx(styles.content)}>
        <Typography as="h2" size="xl" weight="extraBold">
          로그인
        </Typography>
        <Spacer y={8} />
        <LoginForm />
      </div>
    </main>
  );
}
