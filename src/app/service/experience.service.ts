import { supabase } from "@/app/lib/supabase"

export const getExperiences = async () => {
  return supabase
    .from("experiences")
    .select("*")
    .order("order_index")
}
