import { Project } from "@/types/project";

export function mapProject(row: any): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    shortDescription: row.short_description,
    image: row.image,
    featured: row.featured,

    tech: row.project_tech?.map((t: any) => t.tech) ?? [],

    content: row.project_details?.[0]?.content,
    demoUrl: row.project_details?.[0]?.demo_url ?? null,
    repoUrl: row.project_details?.[0]?.repo_url ?? null,
  };
}
