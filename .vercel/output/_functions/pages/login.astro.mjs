import { e as createComponent, n as renderComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_B1VBhITs.mjs';
import 'piccolore';
import { $ as $$Header } from '../chunks/Header_BxoiD2v9.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta charset="utf-8">${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sgpqyurt": true })}${maybeRenderHead()}<main class="login-container" data-astro-cid-sgpqyurt> <form method="POST" action="/api/login" class="login-card" data-astro-cid-sgpqyurt> <h1 data-astro-cid-sgpqyurt>Iniciar Sesión</h1> <label data-astro-cid-sgpqyurt>
Usuario o Email
<input name="identifier" required data-astro-cid-sgpqyurt> </label> <label data-astro-cid-sgpqyurt>
Contraseña
<input type="password" name="password" required data-astro-cid-sgpqyurt> </label> <button type="submit" data-astro-cid-sgpqyurt>Entrar</button> </form> </main> `;
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
