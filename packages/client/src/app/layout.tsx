import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { darkTheme } from "~/styles/theme.css";
import * as styles from "./layout.css";
import "~/styles/global.css";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR" className={clsx(darkTheme, pretendard.variable)}>
      <body className={clsx(styles.container)}>{children}</body>
    </html>
  );
}
