import { Project } from "@/types/project";

export async function getProjectBySlug(slug: string) {
  if (!slug) return null;

  const res = await fetch(`/api/project/${encodeURIComponent(slug)}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed fetch slug:", slug);
    return null;
  }

  return res.json();
}