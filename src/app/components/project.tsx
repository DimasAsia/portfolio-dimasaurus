import { projects } from "../data/project";
import ProjectCard from "./projectcard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 mx-auto max-w-6xl px-4 py-32"
    >
      <h2 className="mb-12 text-center text-3xl font-bold">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}