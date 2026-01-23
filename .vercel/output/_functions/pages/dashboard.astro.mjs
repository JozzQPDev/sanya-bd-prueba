import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C0MrMJEo.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../chunks/AdminLayout_ibCpxHNG.mjs';
import { s as supabaseServer } from '../chunks/supabaseServer_CDOImX3n.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const session = Astro2.cookies.get("session")?.value;
  const { data: user } = await supabaseServer.from("users").select("id, username, email, role").eq("id", session).single();
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "data-astro-cid-3nssi2tu": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="dashboard-main" data-astro-cid-3nssi2tu> <div class="welcome-card" data-astro-cid-3nssi2tu> <h1 data-astro-cid-3nssi2tu>Bienvenido, ${user?.username} 👋</h1> <p class="subtitle" data-astro-cid-3nssi2tu>Panel de administración del sistema</p> </div> <div class="actions" data-astro-cid-3nssi2tu> <a href="/admin/company" data-astro-cid-3nssi2tu> <button class="btn primary" data-astro-cid-3nssi2tu>Editar Empresa</button> </a> <a href="/admin/users" data-astro-cid-3nssi2tu> <button class="btn secondary" data-astro-cid-3nssi2tu>Gestionar Usuarios</button> </a> <form method="POST" action="/api/logout" data-astro-cid-3nssi2tu> <button class="btn danger" data-astro-cid-3nssi2tu>Cerrar sesión</button> </form> </div> </main> ` })} `;
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
