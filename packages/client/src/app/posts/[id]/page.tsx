"use client";

import { use } from "react";
import clsx from "clsx";
import { format, toDate } from "date-fns";
import useSWR from "swr";
import { IPost } from "~/app/api/_firestore/post.type";
import Prose from "~/components/atom/Prose";
import Spacer from "~/components/atom/Spacer";
import Typography from "~/components/atom/Typography";
import * as styles from "./page.css";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

function Post({ params }: Props) {
  const { id } = use(params);
  const { data: post } = useSWR<IPost>(`/api/posts/${id}`, fetcher);

  if (!post) return null;

  const { createdAt, title, body } = post;

  return (
    <main className={clsx(styles.main)}>
      <div className={clsx(styles.cover)}>
        <div className={clsx(styles.content)}>
          <Typography as="h2" weight="extraBold">
            {title}
          </Typography>
          <Spacer y={4} />
          <time className={clsx(styles.date)} dateTime={toDate(createdAt).toString()}>
            {format(createdAt, "yyyy-MM-dd")}
          </time>
        </div>
      </div>
      <div className={clsx(styles.content)}>
        <Prose dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </main>
  );
}

async function fetcher(url: string) {
  const result = await fetch(url).then((data) => data.json());
  return result;
}

export default Post;
