"use client";

import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row">
        {/* LEFT */}
        <div className="flex items-center gap-2 text-sm font-medium text-black">
          <CodeBracketIcon className="h-5 w-5 text-sm font-semibold tracking-wide text-black" />
          DIMASAURUS
        </div>

        {/* CENTER */}
        <p className="text-xs text-gray-500 text-center ">
          © {new Date().getFullYear()} Dimasaurus. Designed with FullSenyum.
        </p>

        {/* RIGHT */}
        <div className="flex items-center gap-5 text-gray-600">
          <Link
            href="https://github.com/DimasAsia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 transition-colors"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/galihdimasprastowo/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 transition-colors"
          >
            LinkedIn
          </Link>

          <Link
            href="mailto:galihdimas@outlook.com"
            className="hover:text-indigo-600 transition-colors"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
