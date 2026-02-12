import { supabase } from '@/app/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
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
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json(data)
}
