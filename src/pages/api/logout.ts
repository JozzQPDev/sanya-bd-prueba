import type { APIRoute } from "astro";
import { supabaseServer } from "../../lib/supabaseServer";

export const POST: APIRoute = async ({ cookies, redirect }) => {
  const sessionToken = cookies.get("session")?.value;

  if (sessionToken) {
    // Delete the session from the database
    await supabaseServer
      .from("sessions")
      .delete()
      .eq("id", sessionToken);
  }

  // Clear the session cookie
  cookies.set("session", "", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  return redirect("/");
};
