type Props = {
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
  };
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-lg">
      <img
        src={project.image}
        alt={project.title}
        className="mb-4 rounded-lg"
      />
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-gray-600">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        className="mt-4 inline-block text-sm text-indigo-600 hover:underline"
      >
        View Project →
      </a>
    </div>
  );
}