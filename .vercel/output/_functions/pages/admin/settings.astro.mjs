import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C0MrMJEo.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_ibCpxHNG.mjs';
import { s as supabaseServer } from '../../chunks/supabaseServer_CDOImX3n.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Settings = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Settings;
  const session = Astro2.cookies.get("session")?.value;
  const { data: user } = await supabaseServer.from("users").select("role").eq("id", session).single();
  if (user?.role !== "admin") {
    return Astro2.redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "data-astro-cid-nc6xuisf": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container" data-astro-cid-nc6xuisf> <h1 data-astro-cid-nc6xuisf>Configuración del Sistema</h1> <p data-astro-cid-nc6xuisf>Configuraciones avanzadas del sistema (solo para administradores).</p> </main> ` })} `;
}, "C:/Paginas con Astro/Pgn - bd-server/src/pages/admin/settings.astro", void 0);

const $$file = "C:/Paginas con Astro/Pgn - bd-server/src/pages/admin/settings.astro";
const $$url = "/admin/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
