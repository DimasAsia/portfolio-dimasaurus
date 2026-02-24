import { Project } from "@/types/project";

function isValidUrl(url?: string) {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function mapProject(row: any) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    shortDescription: row.short_description,
    image: isValidUrl(row.image)
      ? row.image
      : "/images/placeholder.jpg",
    featured: row.featured ?? false,
    tech: row.project_tech?.map((t: any) => t.tech) ?? [],
    content: row.project_details?.[0]?.content ?? null,
    demoUrl: row.project_details?.[0]?.demo_url ?? null,
    repoUrl: row.project_details?.[0]?.repo_url ?? null,
  };
}