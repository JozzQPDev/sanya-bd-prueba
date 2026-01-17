import type { APIRoute } from "astro";
import { supabaseServer } from "../../../lib/supabaseServer";
import bcrypt from "bcryptjs";

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: "User ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { data, error } = await supabaseServer
    .from("users")
    .select("id, username, email, role, is_active, created_at, updated_at")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const PUT: APIRoute = async ({ params, request }) => {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: "User ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const data = await request.json();

  const updateData: any = {
    username: data.username,
    email: data.email,
    role: data.role,
    is_active: data.is_active,
    updated_at: new Date().toISOString(),
  };

  // Only hash and update password if provided
  if (data.password) {
    updateData.password_hash = await bcrypt.hash(data.password, 10);
  }

  const { error } = await supabaseServer
    .from("users")
    .update(updateData)
    .eq("id", id);

  if (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error updating user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ message: "User updated successfully" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: "User ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { error } = await supabaseServer
    .from("users")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error deleting user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ message: "User deleted successfully" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
