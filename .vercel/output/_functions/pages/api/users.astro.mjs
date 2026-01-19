import { s as supabaseServer } from '../../chunks/supabaseServer_C-72eZQB.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
  const { data, error } = await supabaseServer.from("users").select("id, username, email, role, is_active, created_at, updated_at").order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error fetching users" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
