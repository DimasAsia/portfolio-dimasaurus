"use client";

import Image from "next/image";
import type { Project } from "../data/projects";

type Props = Pick<
  Project,
  "title" | "shortDescription" | "tech" | "image"
>;

export default function ProjectCard({
  title,
  shortDescription,
  tech,
  image,
}: Project) {
  return (
    <div className="group flex h-full flex-col rounded-xl bg-white shadow-sm transition hover:shadow-lg">
      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-lg font-semibold">{title}</h3>

        <p className="text-sm text-gray-600 line-clamp-3">
          {shortDescription}
        </p>

        {/* TECH */}
        <div className="mt-auto flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}