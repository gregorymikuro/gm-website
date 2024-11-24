import type { LoaderFunctionArgs } from "@remix-run/node";
import { data } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { reader } from "~/keystatic/reader.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const posts = await reader.collections.posts.all();

  return data({ posts });
}

export default function PostsIndex() {
  const {
    data: { posts },
  } = useLoaderData<typeof loader>();

  return (
    <div className="p-4">
      <p className="text-2xl font-semibold">Posts</p>
      <ul className="space-y-5 mt-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
