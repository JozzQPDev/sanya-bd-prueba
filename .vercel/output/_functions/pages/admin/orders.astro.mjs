import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C0MrMJEo.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_DLMoqZco.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Orders = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "data-astro-cid-7cqwybcj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container" data-astro-cid-7cqwybcj> <h1 data-astro-cid-7cqwybcj>Pedidos</h1> <p data-astro-cid-7cqwybcj>Gestión de pedidos próximamente.</p> </main> ` })} `;
}, "C:/Paginas con Astro/Pgn - bd-server/src/pages/admin/orders.astro", void 0);

const $$file = "C:/Paginas con Astro/Pgn - bd-server/src/pages/admin/orders.astro";
const $$url = "/admin/orders";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Orders,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
