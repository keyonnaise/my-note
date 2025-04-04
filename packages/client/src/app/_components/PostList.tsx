import Link from "next/link";
import Typography from "~/components/atom/Typography";
import { IPost } from "../api/_firestore/post.type";
import * as styles from "./PostList.css";

interface Props {
  posts: IPost[];
}

function PostList({ posts }: Props) {
  return (
    <div className={styles.container}>
      {posts.map(({ id, title, body }, i) => (
        <Link key={i} className={styles.item} href={`/posts/${id}`}>
          <Typography as="h3" size="lg" weight="semiBold" truncate>
            {title}
          </Typography>
          <Typography as="p" color="sub" lineClamp={2}>
            {body}
          </Typography>
        </Link>
      ))}
    </div>
  );
}

export default PostList;
