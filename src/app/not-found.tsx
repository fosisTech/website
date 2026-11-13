import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center"
    >
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="max-w-md text-gray-600 dark:text-gray-300">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="rounded-md bg-indigo-600 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Back to the FOSIS homepage
      </Link>
    </main>
  );
}
