import { NextResponse } from "next/server";
import { supabaseServer } from "@/app/lib/supabase-server";
import { mapProject } from "@/app/lib/mapProject";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
  
) {
  if (!slug || slug === "undefined") {
    notFound();
  }
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("projects")
    .select(`
      id, slug, title, short_description, image, featured,
      project_details ( content, demo_url, repo_url ),
      project_tech ( tech )
    `)
    .eq("slug", params.slug)
    .single();

  if (error || !data) {
    return NextResponse.json(null, { status: 404 });
  }

  return NextResponse.json(mapProject(data));
}