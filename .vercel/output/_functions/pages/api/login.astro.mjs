import { s as supabaseServer } from '../../chunks/supabaseServer_CDOImX3n.mjs';
import bcrypt from 'bcryptjs';
export { renderers } from '../../renderers.mjs';

async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const identifier = String(formData.get("identifier") || "").trim();
  const password = String(formData.get("password") || "");
  if (!identifier || !password) {
    return new Response("Datos incompletos", { status: 400 });
  }
  const { data: user, error } = await supabaseServer.from("users").select("*").or(`email.eq.${identifier},username.eq.${identifier}`).eq("is_active", true).single();
  if (error || !user) {
    console.error("Login error:", error);
    return new Response("Usuario no encontrado", { status: 401 });
  }
  const isValid = await verifyPassword(password, user.password_hash);
  if (!isValid) {
    return new Response("Contraseña incorrecta", { status: 401 });
  }
  cookies.set("session", user.id, {
    httpOnly: true,
    sameSite: "strict",
    secure: false,
    path: "/",
    maxAge: 60 * 60 * 24
  });
  return redirect("/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
