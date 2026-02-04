import { notFound } from "next/navigation";
import Image from "next/image";
import { Project, projects } from "@/app/data/projects";

type Props = {
  params: Promise< { slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  
  const {slug} = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="mx-auto max-w-4xl px-1 py-8">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-3 text-gray-600">
          {project.shortDescription}
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative mb-10 h-64 overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="space-y-8">
        <p className="text-gray-700 leading-relaxed">
          {project.description}
        </p>

        {/* TECH */}
        <div>
          <h3 className="mb-3 font-semibold">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-gray-100 px-3 py-1 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4 pt-6">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              className="rounded-md bg-black px-5 py-2 text-sm text-white"
            >
              Live Demo
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              className="rounded-md border px-5 py-2 text-sm"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
