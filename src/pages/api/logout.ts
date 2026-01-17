import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ cookies, redirect }) => {
  // Eliminar la cookie de sesión
  cookies.delete("session", {
    path: "/",
  });

  // Redirigir al login
  return redirect("/");
};
