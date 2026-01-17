import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, o as renderSlot, r as renderTemplate, n as renderComponent } from './astro/server_B1VBhITs.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';
import { s as supabase } from './supabase_Ajqi_3IU.mjs';

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

export { $$Header as $ };
