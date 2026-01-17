import type { APIRoute } from "astro";
import { supabaseServer } from "../../lib/supabaseServer";
import { hashPassword } from "../../lib/auth";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  const username = String(formData.get("username") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  if (!username || !email || !password) {
    return new Response("Datos incompletos", { status: 400 });
  }

  // Verificar si el usuario ya existe
  const { data: existingUser } = await supabaseServer
    .from("users")
    .select("id")
    .or(`email.eq.${email},username.eq.${username}`)
    .single();

  if (existingUser) {
    return new Response("Usuario o email ya existe", { status: 409 });
  }

  // Hashear la contraseña
  const passwordHash = await hashPassword(password);

  // Insertar nuevo usuario
  const { data, error } = await supabaseServer
    .from("users")
    .insert({
      username,
      email,
      password_hash: passwordHash,
      role: "user", // rol por defecto
      is_active: true,
    })
    .select()
    .single();

  if (error) {
    console.error("Register error:", error);
    return new Response("Error al registrar usuario", { status: 500 });
  }

  return redirect("/login");
};
