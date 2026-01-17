import type { APIRoute } from "astro";
import { supabaseServer } from "../../../lib/supabaseServer";

export const GET: APIRoute = async () => {
  const { data, error } = await supabaseServer
    .from("users")
    .select("id, username, email, role, is_active, created_at, updated_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error fetching users" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
