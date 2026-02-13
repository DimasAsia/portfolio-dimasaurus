import { supabaseServer } from "@/app/lib/supabase-server";
import { NextResponse } from "next/server";
import { mapProject } from "@/app/lib/mapProject";

export const dynamic = "force-dynamic"

export async function GET() {
  const supabase = supabaseServer();
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
    .eq("featured", true)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  const projects = data.map(mapProject);

  return NextResponse.json(projects);
}
