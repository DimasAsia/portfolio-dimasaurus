import 'server-only'
import { createClient } from '@supabase/supabase-js'

export function supabaseServer() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error('Supabase server env missing at runtime')
  }

  return createClient(url, key, {
    auth: {
      persistSession: false,
    },
  })
}
