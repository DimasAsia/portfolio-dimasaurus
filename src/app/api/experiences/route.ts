import { supabaseServer } from "@/app/lib/supabase-server"
import { NextResponse } from 'next/server'

export async function GET() {
  const { data, error } = await supabaseServer
    .from('experiences')
    .select('*')
    .order('order_index')

  if (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json(data)
}
