import { createClient } from "@supabase/supabase-js";

if (!import.meta.env.SUPABASE_URL || !import.meta.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Missing Supabase environment variables in production");
}

export const supabaseServer = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY
);
