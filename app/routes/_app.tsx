import { Outlet } from "@remix-run/react";
import Navbar from "~/components/Navbar";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </>
  );
}
