import { e as createComponent, f as createAstro, k as renderHead, r as renderTemplate } from '../chunks/astro/server_B1VBhITs.mjs';
import 'piccolore';
import 'clsx';
import { s as supabaseServer } from '../chunks/supabaseServer_CDOImX3n.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const session = Astro2.cookies.get("session")?.value;
  const { data: user } = await supabaseServer.from("users").select("id, username, email, role").eq("id", session).single();
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><title>Dashboard</title><!-- tus estilos intactos -->${renderHead()}</head> <body> <main class="container"> <div class="card"> <h1>Bienvenido 👋</h1> <p class="subtitle">Panel de administración del sistema</p> <div class="actions"> <a href="/company"> <button class="btn">Editar Empresa</button> </a> <form method="POST" action="/logout"> <button class="btn secondary">Cerrar sesión</button> </form> </div> </div> </main> </body></html>`;
}, "C:/Paginas con Astro/Pgn - bd-server/src/pages/dashboard.astro", void 0);

const $$file = "C:/Paginas con Astro/Pgn - bd-server/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
