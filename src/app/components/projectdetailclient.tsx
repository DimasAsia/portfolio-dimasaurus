'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  project: any;
};

export default function ProjectDetailClient({ project }: Props) {
  const detail = project.project_details?.[0];
  const techList = project.project_tech?.map((t: any) => t.tech) ?? [];

  return (
    <main className="container mx-auto max-w-6xl px-5 py-5">
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

      {/* CONTENT (Markdown) */}
      
      {detail?.content && (
        <section className="prose prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-6 my-4" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-6 my-4" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="mb-1" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="my-3 leading-relaxed" {...props} />
              ),
              code: ({ inline, children, ...props }) =>
                inline ? (
                  <code className="rounded bg-muted px-1 py-0.5 text-sm" {...props}>
                    {children}
                  </code>
                ) : (
                  <pre className="rounded-lg bg-black p-4 text-white overflow-x-auto">
                    <code>{children}</code>
                  </pre>
                ),
            }}
          >
            {detail.content}
          </ReactMarkdown>
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
              className="rounded-lg border bg-black px-5 py-2 text-white hover:bg-gray-50 hover:text-black"
            >
              Source Code
            </a>
          )}
        </section>
      )}
    </main>
  );
}