/* eslint-disable import/no-named-as-default-member */
import React from "react";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { data } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import markdoc from "@markdoc/markdoc";

import { reader } from "~/keystatic/reader.server";
import { markdocConfig } from "$/keystatic.config";

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  {
    title: data?.data.post.title,
    description: data?.data.post.description,
  },
];

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;

  if (!slug) {
    throw data({ message: "Not Found" }, { status: 404 });
  }

  const post = await reader.collections.posts.read(slug, {
    resolveLinkedFiles: true,
  });

  if (!post) {
    throw data({ message: "Not Found" }, { status: 404 });
  }

  const errors = markdoc.validate(post.content.node, markdocConfig);

  if (errors.length) {
    console.error(errors);
    throw data({ message: "Invalid content" }, { status: 404 });
  }

  const content = markdoc.transform(post.content.node, markdocConfig);

  return data({
    post: {
      title: post.title,
      description: post.description,
      content,
    },
  });
}

export default function PostPage() {
  const {
    data: { post },
  } = useLoaderData<typeof loader>();

  return (
    <div className="prose p-4">
      <h1>{post.title}</h1>
      <div>{markdoc.renderers.react(post.content, React)}</div>
    </div>
  );
}