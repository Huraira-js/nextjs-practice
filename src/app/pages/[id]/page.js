import { notFound } from "next/navigation";
import Link from "next/link";

const Post = async ({ params: { id } }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  const post = await res.json();

  if (!post) {
    notFound();
  }
  return (
    <div>
      <h1>{post.title.toUpperCase()}</h1>
      <p>{post.body}</p>
      <Link href={"/pages"}>Back</Link>
    </div>
  );
};

export default Post;
