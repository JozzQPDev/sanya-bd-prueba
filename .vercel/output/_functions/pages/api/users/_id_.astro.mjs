import { s as supabaseServer } from '../../../chunks/supabaseServer_CDOImX3n.mjs';
import bcrypt from 'bcryptjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ params }) => {
  const { id } = params;
  if (!id) {
    return new Response(JSON.stringify({ error: "User ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const { data, error } = await supabaseServer.from("users").select("id, username, email, role, is_active, created_at, updated_at").eq("id", id).single();
  if (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const PUT = async ({ params, request }) => {
  const { id } = params;
  if (!id) {
    return new Response(JSON.stringify({ error: "User ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const data = await request.json();
  const updateData = {
    username: data.username,
    email: data.email,
    role: data.role,
    is_active: data.is_active,
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  if (data.password) {
    updateData.password_hash = await bcrypt.hash(data.password, 10);
  }
  const { error } = await supabaseServer.from("users").update(updateData).eq("id", id);
  if (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error updating user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ message: "User updated successfully" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const DELETE = async ({ params }) => {
  const { id } = params;
  if (!id) {
    return new Response(JSON.stringify({ error: "User ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const { error } = await supabaseServer.from("users").delete().eq("id", id);
  if (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error deleting user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ message: "User deleted successfully" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
