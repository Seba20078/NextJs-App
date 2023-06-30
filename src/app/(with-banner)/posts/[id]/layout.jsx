import Link from "next/link";
import { font } from "@/app/font";

const fetchSinglePosts = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};
export default async function Post({ params, children }) {
  const id = params.id;
  const post = await fetchSinglePosts(id);
  return (
    <article className={font.variable}>
      <h1 className={font.variable}>{post.title}</h1>
      <p>{post.body}</p>
      <Link href='posts/[id]/comments' as={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  );
}
