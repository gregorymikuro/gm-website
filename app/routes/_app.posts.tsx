import type { LoaderFunctionArgs } from "@remix-run/node";
import { data, Link, Outlet, useLoaderData } from "@remix-run/react";
import { reader } from "~/keystatic/reader.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const posts = await reader.collections.posts.all();

  return data({ posts });
}

export default function PostsLayout() {
  const {
    data: { posts },
  } = useLoaderData<typeof loader>();

  return (
    <div className="h-full max-w-7xl mx-auto ">
      <div className="pt-4">
        <Link to="/posts" className="underline text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 inline-block mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to Posts
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
