import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ title: string }> }
) {
  const { title } = await params;

  const { data, error } = await supabase
    .from("portfolio")
    .select("image_url")
    .eq("title", title)
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
