"use client";

import { useEffect, useState } from "react";
import { getProjects } from "../service/project.service";
import { Project } from "@/types/project";
import ProjectCard from "../components/projectcard";
import ProjectModal from "../components/projectmodal";

export default function AllProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 -py-5 mt-0">
      <h1 className="text-3xl font-bold mb-8">All Projects</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <ProjectCard
            key={p.id}
            {...p}
            onClick={() => setSelected(p)}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}