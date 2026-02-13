
import { supabaseServer } from '@/app/lib/supabase-server'
import { NextResponse } from 'next/server'

export const dynamic = "force-dynamic"

export async function GET() {
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from('project-tech')
    .select('*')

  if (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json(data)
}
