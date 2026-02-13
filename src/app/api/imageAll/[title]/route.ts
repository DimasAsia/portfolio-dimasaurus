import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/app/lib/supabase-server";

export const dynamic = "force-dynamic"

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ title: string }> }

) {
  const supabase = supabaseServer();
  const { title } = await params; 

  const { data, error } = await supabase
    .from("portfolio")
    .select("image_url")
    .eq("title", title)
    .single();

  if (error || !data) {
    return NextResponse.json(
      { error: "Image not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    image_url: data.image_url,
  });
}
