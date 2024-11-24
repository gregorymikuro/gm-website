import { type MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { site } from "~/constants/config";

export const meta: MetaFunction = () => {
  return [
    { title: site.title },
    { name: "description", content: site.description },
  ];
};

export default function Index() {
  return (
    <div className="max-w-7xl mx-auto max-xl:p-4 xl:pt-4">
      <h1 className="text-4xl font-bold">Keystatic ⚡️</h1>
      <p className="text-xl my-4">
        This homepage shows how to load a collection from the reader API.
      </p>
      <div className="text-lg  ">
        <Link to="/keystatic" className="underline text-blue-600">
          Click here to visit the Admin UI
        </Link>
        <br />
        <Link to="/posts" className="underline text-blue-600">
          Checkout Posts
        </Link>
      </div>
    </div>
  );
}
