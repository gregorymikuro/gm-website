import { Link } from "@remix-run/react";
import { site } from "~/constants/config";

const navLinks: { title: string; path: string }[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Posts",
    path: "/posts",
  },
  {
    title: "Keystatic Admin",
    path: "/keystatic",
  },
];

export default function Navbar() {
  return (
    <header className="p-4 border-b border-slate-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-slate-700">
          💿 {site.title}
        </Link>

        <nav>
          <ul className="flex items-center gap-8">
            {navLinks.map((l, i) => (
              <li key={l.path + i}>
                <Link to={l.path} className="text-lg">
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
