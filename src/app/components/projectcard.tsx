"use client"

import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo?: string;
  repo?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  demo,
  repo,
}: Project) {
  return (
    <div className="group rounded-xl bg-white shadow-sm transition hover:shadow-lg">
      {/* IMAGE */}
      <div className="relative h-30 overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-4 p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* ACTION */}
        
        
      </div>
    </div>
  );
}