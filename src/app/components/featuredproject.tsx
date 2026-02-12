"use client";

import { useEffect, useState } from "react";
import ProjectModal from "./projectmodal";
import Link from "next/link";
import { getFeaturedProjects } from "../service/project.service";
import { Project } from "@/types/project";
import ProjectCard from "./projectcard";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    getFeaturedProjects().then(setProjects);
  }, []);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-15">
      <div className="mb-12">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-2 text-gray-600">
          Selected works that represent my skills and experience
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className="cursor-pointer"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />

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
