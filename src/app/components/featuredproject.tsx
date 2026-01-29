"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./projectcard";
import ProjectModal from "./projectmodal";
import Link from "next/link";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const [selected, setSelected] = useState<any | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-2 text-gray-600">
          Selected works that represent my skills and experience
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {featured.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className="cursor-pointer"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* MODAL */}
      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
      {/* CTA */}
      <div className="mt-14 text-center">
        <Link
          href="/project"
          className="inline-flex items-center gap-2 text-sm font-medium underline"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}