import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, n as renderSlot, r as renderTemplate, k as renderComponent, o as renderHead } from '../chunks/astro/server_C0MrMJEo.mjs';
import 'piccolore';
import { s as supabase } from '../chunks/supabase_BaTEaPYx.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "C:/Paginas con Astro/Pgn - bd-server/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
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
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <!-- LOGO + TÍTULO --> <div class="logo" data-astro-cid-3ef6ksr2> ${data && data.logo ? renderTemplate`<img${addAttribute(data.logo, "src")}${addAttribute(`Logo de ${data.nombre}`, "alt")} class="footer-logo" width="180" data-astro-cid-3ef6ksr2>` : renderTemplate`<img src="/placeholder-logo.png" alt="Logo predeterminado" class="footer-logo" width="180" data-astro-cid-3ef6ksr2>`} <h2 data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2>${data ? data.nombre : "Nombre de la Empresa"}</a></h2> </div> <!-- LINKS INTERNOS --> <div class="internal-links" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "data-astro-cid-3ef6ksr2": true }, { "default": async ($$result2) => renderTemplate`Inicio` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/login", "data-astro-cid-3ef6ksr2": true }, { "default": async ($$result2) => renderTemplate`Login` })} </div> </nav> </header> `;
}, "C:/Paginas con Astro/Pgn - bd-server/src/components/Header.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
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
  return renderTemplate`<head><meta charset="utf-8"><title>${data.nombre}</title><link rel="icon"${addAttribute(data.logo, "href")} type="image/png">${renderHead()}</head> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> ${data ? renderTemplate`<section class="company-info" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>${data.nombre}</h1> <p data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Dirección:</strong> ${data.direccion} </p> <p data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Teléfono:</strong> ${data.telefono} </p> <p data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Email:</strong> ${data.mail} </p> <p data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Horario:</strong> ${data.horario} </p> </div> <div data-astro-cid-j7pv25f6> ${data.logo && renderTemplate`<img${addAttribute(data.logo, "src")}${addAttribute(`Logo de ${data.nombre}`, "alt")} width="180" data-astro-cid-j7pv25f6>`} </div> </section>` : renderTemplate`<div class="error-container" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>No se pudo cargar la información.</p> ${errorMsg && renderTemplate`<small data-astro-cid-j7pv25f6>${errorMsg}</small>`} </div>`} </main> `;
}, "C:/Paginas con Astro/Pgn - bd-server/src/pages/index.astro", void 0);

const $$file = "C:/Paginas con Astro/Pgn - bd-server/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
