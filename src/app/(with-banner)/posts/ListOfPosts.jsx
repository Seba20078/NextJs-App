import Link from "next/link";
import { LikeButton } from "./LikeButton";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: 'no-store',
  }).then((res) => res.json());
};
export async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0,5).map(post => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2 style={{ color: "#09f" }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ));
}
