import PostList from "../../components/PostLists/PostLists";

export default async function HomePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return (
    <main>
      <PostList posts={posts} />
    </main>
  );
}
