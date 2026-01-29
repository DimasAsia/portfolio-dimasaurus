"use client";

import { projects } from "../data/projects";
import ProjectCard from "../components/projectcard";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <h1 className="text-4xl font-bold">All Projects</h1>
        <p className="mt-3 text-gray-600 max-w-xl">
          A complete list of projects I’ve built, covering frontend, backend,
          and system-level implementations.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
