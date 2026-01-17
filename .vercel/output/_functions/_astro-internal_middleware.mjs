import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Dif3BtcV.mjs';
import 'piccolore';
import './chunks/astro/server_B1VBhITs.mjs';
import 'clsx';
import { s as sequence } from './chunks/index_BHL-sun2.mjs';

const onRequest$1 = async (context, next) => {
  const { cookies, url } = context;
  const pathname = url.pathname;
  const session = cookies.get("session")?.value;
  if (pathname.startsWith("/_astro") || pathname.startsWith("/api") || pathname.includes(".")) {
    return next();
  }
  if (pathname.startsWith("/dashboard") && !session) {
    return Response.redirect(new URL("/login", url), 302);
  }
  if (pathname === "/login" && session) {
    return Response.redirect(new URL("/dashboard", url), 302);
  }
  return next();
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
