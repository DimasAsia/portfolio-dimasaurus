import { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  const res = await fetch("/api/project", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed fetch projects");
  return res.json();
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const res = await fetch("/api/project/featured", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed fetch featured");
  return res.json();
}