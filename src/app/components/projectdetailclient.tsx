'use client';

type Props = {
  project: any;
};

export default function ProjectDetailClient({ project }: Props) {
  const detail = project.project_details?.[0];
  const techList = project.project_tech?.map((t: any) => t.tech) ?? [];

  return (
    <main className="container mx-auto max-w-6xl px-5 -py-5">
      {/* HERO */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          {project.short_description}
        </p>
      </header>

      {/* TECH STACK */}
      {techList.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-2">
            {techList.map((tech: string) => (
              <span
                key={tech}
                className="rounded-full border px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* CONTENT */}
      {detail?.content && (
        <section className="prose prose-neutral dark:prose-invert max-w-none">
          {detail.content}
        </section>
      )}

      {/* LINKS */}
      {(detail?.demo_url || detail?.repo_url) && (
        <section className="mt-12 flex gap-4">
          {detail.demo_url && (
            <a
              href={detail.demo_url}
              target="_blank"
              className="rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-50 hover:text-black"
            >
              Live Demo
            </a>
          )}

          {detail.repo_url && (
            <a
              href={detail.repo_url}
              target="_blank"
              className="rounded-lg bg-black border text-white px-5 py-2 hover:bg-gray-50 hover:text-black"
            >
              Source Code
            </a>
          )}
        </section>
      )}
    </main>
  );
}
