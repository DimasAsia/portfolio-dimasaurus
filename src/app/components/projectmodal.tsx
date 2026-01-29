"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo?: string;
  repo?: string;
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-xl bg-white p-6 shadow-xl"
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="mt-6 space-y-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-gray-100 px-2 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="rounded-md bg-black px-4 py-2 text-sm text-white"
                  >
                    Live Demo
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    className="rounded-md border px-4 py-2 text-sm"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}