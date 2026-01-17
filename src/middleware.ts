import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { cookies, url } = context;
  const pathname = url.pathname;

  const session = cookies.get("session")?.value;

  // Ignorar recursos estáticos
  if (
    pathname.startsWith("/_astro") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return next();
  }

  // Protege dashboard
  if (pathname.startsWith("/dashboard") && !session) {
    return Response.redirect(new URL("/login", url), 302);
  }

  // Evita volver al login si ya hay sesión
  if (pathname === "/login" && session) {
    return Response.redirect(new URL("/dashboard", url), 302);
  }

  return next();
};
