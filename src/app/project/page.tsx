import { projects } from "../data/projects";
import ProjectCard from "../components/projectcard";

export default function AllProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="mb-12 text-3xl font-bold">All Projects</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.id}
            href={`/project/${project.slug}`}
          >
            <ProjectCard {...project} />
          </a>
        ))}
      </div>
    </section>
  );
}
