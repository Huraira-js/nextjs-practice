import Link from "next/link";
import classes from "./PostLists.module.css";

export default async function PostList({ posts }) {
  
  return (
    <div className={classes.mainBody}>
      <h1 className={classes.postsHeading}>Posts</h1>
      <ul>
        {posts.map((post) => (
          <Link className={classes.cardLink} key={post.id} href={`/pages/${post.id}`}>
            <li className={classes.card}>
              <h2 className={classes.cardTitle}>
                <span className={classes.cardTitle}>Post no {post.id}: </span>
                {post.title}
              </h2>
              <p className={classes.cardBody}> {post.body}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
