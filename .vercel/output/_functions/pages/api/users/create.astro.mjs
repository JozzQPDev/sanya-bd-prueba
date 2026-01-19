import { s as supabaseServer } from '../../../chunks/supabaseServer_C-72eZQB.mjs';
import bcrypt from 'bcryptjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  const data = await request.json();
  if (!data.password) {
    return new Response(JSON.stringify({ error: "Password is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const passwordHash = await bcrypt.hash(data.password, 10);
  const { error } = await supabaseServer.from("users").insert({
    username: data.username,
    email: data.email,
    password_hash: passwordHash,
    role: data.role ?? "user",
    is_active: data.is_active ?? true
  });
  if (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error creating user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ message: "User created successfully" }), {
    status: 201,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
