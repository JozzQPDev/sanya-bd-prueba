import { s as supabaseServer } from '../../chunks/supabaseServer_C-72eZQB.mjs';
import bcrypt from 'bcryptjs';
export { renderers } from '../../renderers.mjs';

async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

const POST = async ({ request, cookies, redirect }) => {
  const body = await request.text();
  const params = new URLSearchParams(body);
  const identifier = String(params.get("identifier") || "").trim().toLowerCase();
  const password = String(params.get("password") || "");
  if (!identifier || !password) {
    return new Response("Credenciales inválidas", { status: 400 });
  }
  console.log("Login attempt for:", identifier);
  const { data: user } = await supabaseServer.from("users").select("*").or(`email.eq.${identifier},username.eq.${identifier}`).eq("is_active", true).single();
  console.log("User found:", user ? "yes" : "no");
  if (user) {
    console.log("User active:", user.is_active);
    console.log("Password hash exists:", !!user.password_hash);
  }
  if (!user) {
    console.log("No user found");
    await new Promise((r) => setTimeout(r, 800));
    return new Response("Credenciales inválidas", { status: 401 });
  }
  const isValid = await verifyPassword(password, user.password_hash);
  console.log("Password valid:", isValid);
  if (!isValid) {
    console.log("Invalid password");
    await new Promise((r) => setTimeout(r, 800));
    return new Response("Credenciales inválidas", { status: 401 });
  }
  const sessionToken = crypto.randomUUID();
  await supabaseServer.from("sessions").insert({
    id: sessionToken,
    user_id: user.id,
    expires_at: new Date(Date.now() + 864e5)
    // 24 hours
  });
  cookies.set("session", sessionToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 86400
  });
  return redirect("/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
