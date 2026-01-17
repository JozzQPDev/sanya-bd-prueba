import type { APIRoute } from "astro";
import { supabaseServer } from "../../lib/supabaseServer";
import { verifyPassword } from "../../lib/auth";
export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();

  const identifier = String(formData.get("identifier") || "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") || "");

  if (!identifier || !password) {
    return new Response("Credenciales inválidas", { status: 400 });
  }

  const { data: user } = await supabaseServer
    .from("users")
    .select("*")
    .or(`email.eq.${identifier},username.eq.${identifier}`)
    .eq("is_active", true)
    .single();

  if (!user) {
    await new Promise((r) => setTimeout(r, 800));
    return new Response("Credenciales inválidas", { status: 401 });
  }

  const isValid = await verifyPassword(password, user.password_hash);

  if (!isValid) {
    await new Promise((r) => setTimeout(r, 800));
    return new Response("Credenciales inválidas", { status: 401 });
  }

  // Crear sesión segura
  const sessionToken = crypto.randomUUID();

  await supabaseServer.from("sessions").insert({
    id: sessionToken,
    user_id: user.id,
    expires_at: new Date(Date.now() + 86400000),
  });

  cookies.set("session", sessionToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: import.meta.env.PROD,
    path: "/",
    maxAge: 86400,
  });

  return redirect("/dashboard");
};
