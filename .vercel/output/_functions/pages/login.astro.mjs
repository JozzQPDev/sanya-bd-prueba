import { e as createComponent, m as maybeRenderHead, r as renderTemplate, h as addAttribute, o as renderHead, k as renderComponent, l as renderScript } from '../chunks/astro/server_C0MrMJEo.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
import { s as supabase } from '../chunks/supabase_BaTEaPYx.mjs';
export { renderers } from '../renderers.mjs';

const $$Loading = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="loading" data-astro-cid-52om46wh> <div class="spinner" data-astro-cid-52om46wh></div> <p data-astro-cid-52om46wh>Cargando información...</p> </section> `;
}, "C:/Paginas con Astro/Pgn - bd-server/src/components/Loading.astro", void 0);

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  let data = null;
  let errorMsg = null;
  try {
    const { data: companyData, error } = await supabase.from("company_info").select("*").single();
    if (error) throw error;
    data = companyData;
  } catch (err) {
    errorMsg = err instanceof Error ? err.message : "Error desconocido";
    console.error("Error fetching company info:", errorMsg);
  }
  return renderTemplate`<head><meta charset="utf-8"><title>Login - ${data?.nombre || "Sistema"}</title><link rel="icon"${addAttribute(data?.logo || "/favicon.svg", "href")} type="image/png">${renderHead()}</head> <main class="login-container" data-astro-cid-sgpqyurt> <form method="POST" action="/api/login" class="login-card" id="loginForm" data-astro-cid-sgpqyurt> <h1 data-astro-cid-sgpqyurt>Iniciar Sesión</h1> <label data-astro-cid-sgpqyurt>
Usuario o Email
<input name="identifier" type="text" required data-astro-cid-sgpqyurt> </label> <label data-astro-cid-sgpqyurt>
Contraseña
<input type="password" name="password" required data-astro-cid-sgpqyurt> </label> <button type="submit" data-astro-cid-sgpqyurt>Entrar</button> <a class="salirlog" href="/" aria-describedby="salir-desc" data-astro-cid-sgpqyurt>Salir</a> <span id="salir-desc" class="sr-only" data-astro-cid-sgpqyurt>
Vuelve a la página principal sin iniciar sesión
</span> </form> <div id="loading" style="display: none;" data-astro-cid-sgpqyurt> ${renderComponent($$result, "Loading", $$Loading, { "data-astro-cid-sgpqyurt": true })} </div> </main> ${renderScript($$result, "C:/Paginas con Astro/Pgn - bd-server/src/pages/login.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Paginas con Astro/Pgn - bd-server/src/pages/login.astro", void 0);

const $$file = "C:/Paginas con Astro/Pgn - bd-server/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
