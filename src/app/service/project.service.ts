import { supabase } from "@/app/lib/supabase";
import { mapProject } from "@/app/lib/mapProject";
import { Project } from "@/types/project";

export async function getFeaturedProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select(`
      id,
      slug,
      title,
      short_description,
      image,
      featured,
      project_details (
        content,
        demo_url,
        repo_url
      ),
      project_tech (
        tech
      )
    `)
    .eq("featured", true);

  if (error) {
    console.error(error);
    return [];
  }

  return data.map(mapProject);
}
