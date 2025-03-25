"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Divider from "~/components/atom/Divider";
import Spacer from "~/components/atom/Spacer";
import Typography from "~/components/atom/Typography";
import PostList from "./_components/PostList";
import { IPost } from "./api/_firestore/types";
import * as styles from "./page.css";

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    (async function () {
      const data = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }).then((data) => data.json());
      setPosts(data.posts);
    })();
  }, []);

  return (
    <>
      <header className={clsx(styles.header)} />
      <main className={clsx(styles.main)}>
        <div className={clsx(styles.content)}>
          <Typography as="h2" weight="extraBold">
            Hi there 👋
            <br />
            Keyonnaise&apos;s blog
          </Typography>
          <Spacer y={20} />
          <div>전체 글</div>
          <Divider />
          <PostList posts={posts} />
        </div>
      </main>
      <footer className={clsx(styles.footer)} />
    </>
  );
}
