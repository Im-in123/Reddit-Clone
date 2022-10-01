import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANNON_KEY;
// console.log(supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseAnnonKey);
