"use client";

import Image from "next/image";
import { Project } from "@/types/project";

type Props = Pick<
  Project,
  "title" | "shortDescription" | "tech" | "image"
> & {
  onClick?: () => void;
};

export default function ProjectCard({
  title,
  shortDescription,
  tech,
  image,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl bg-white shadow hover:shadow-lg transition"
    >
      <div className="relative h-48">
        <Image src={image} alt={title} fill className="object-cover rounded-t-xl" />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">
          {shortDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map(t => (
            <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}