import { e as createComponent, k as renderHead, n as renderComponent, h as addAttribute, r as renderTemplate } from '../chunks/astro/server_B1VBhITs.mjs';
import 'piccolore';
import { s as supabase } from '../chunks/supabase_Ajqi_3IU.mjs';
import { $ as $$Header } from '../chunks/Header_BxoiD2v9.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

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
  return renderTemplate`<head><meta charset="utf-8"><title>${data.nombre}</title>${renderHead()}</head> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> ${data ? renderTemplate`<section class="company-info" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>${data.nombre}</h1> <p data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Dirección:</strong> ${data.direccion} </p> <p data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Teléfono:</strong> ${data.telefono} </p> <p data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Email:</strong> ${data.mail} </p> <p data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Horario:</strong> ${data.horario} </p> </div> <div data-astro-cid-j7pv25f6> ${data.logo && renderTemplate`<img${addAttribute(data.logo, "src")}${addAttribute(`Logo de ${data.nombre}`, "alt")} width="180" data-astro-cid-j7pv25f6>`} </div> </section>` : renderTemplate`<div class="error-container" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>No se pudo cargar la información.</p> ${errorMsg && renderTemplate`<small data-astro-cid-j7pv25f6>${errorMsg}</small>`} </div>`} </main> `;
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
