import { e as createComponent, k as renderHead, h as addAttribute, l as renderScript, r as renderTemplate } from '../chunks/astro/server_B1VBhITs.mjs';
import 'piccolore';
import 'clsx';
import { s as supabase } from '../chunks/supabase_Ajqi_3IU.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Company = createComponent(async ($$result, $$props, $$slots) => {
  const COMPANY_ID = 1;
  const { data: company, error } = await supabase.from("company_info").select("*").eq("id", COMPANY_ID).single();
  if (error) {
    throw new Error("Error cargando datos de la empresa");
  }
  return renderTemplate`<head><meta charset="utf-8"><title>Panel Empresa</title>${renderHead()}</head>  <main class="container" data-astro-cid-5yxmqngi> <form id="companyForm" class="admin-grid" data-astro-cid-5yxmqngi> <!-- LOGO --> <div class="logo-card" data-astro-cid-5yxmqngi> <div class="logo-preview" data-astro-cid-5yxmqngi> ${company.logo ? renderTemplate`<img${addAttribute(company.logo, "src")} data-astro-cid-5yxmqngi>` : renderTemplate`<span data-astro-cid-5yxmqngi>Sin logo</span>`} </div> <h1 data-astro-cid-5yxmqngi>${company.nombre}</h1> </div> <!-- FORM --> <div class="form-card" data-astro-cid-5yxmqngi> <div class="fields" data-astro-cid-5yxmqngi> <div class="field" data-astro-cid-5yxmqngi> <label data-astro-cid-5yxmqngi>Nombre</label> <input name="nombre"${addAttribute(company.nombre, "value")} required data-astro-cid-5yxmqngi> </div> <div class="field" data-astro-cid-5yxmqngi> <label data-astro-cid-5yxmqngi>Dirección</label> <input name="direccion"${addAttribute(company.direccion, "value")} required data-astro-cid-5yxmqngi> </div> <div class="field" data-astro-cid-5yxmqngi> <label data-astro-cid-5yxmqngi>Teléfono</label> <input name="telefono"${addAttribute(company.telefono, "value")} required data-astro-cid-5yxmqngi> </div> <div class="field" data-astro-cid-5yxmqngi> <label data-astro-cid-5yxmqngi>Email</label> <input type="email" name="mail"${addAttribute(company.mail, "value")} required data-astro-cid-5yxmqngi> </div> <div class="field full" data-astro-cid-5yxmqngi> <label data-astro-cid-5yxmqngi>Horario</label> <input name="horario"${addAttribute(company.horario, "value")} required data-astro-cid-5yxmqngi> </div> <div class="field full" data-astro-cid-5yxmqngi> <label data-astro-cid-5yxmqngi>URL del Logo</label> <input name="logo"${addAttribute(company.logo ?? "", "value")} data-astro-cid-5yxmqngi> </div> </div> <button class="btn" type="submit" data-astro-cid-5yxmqngi>Guardar Cambios</button> </div> </form> ${renderScript($$result, "C:/Paginas con Astro/Pgn - bd-server/src/pages/company.astro?astro&type=script&index=0&lang.ts")} </main>`;
}, "C:/Paginas con Astro/Pgn - bd-server/src/pages/company.astro", void 0);

const $$file = "C:/Paginas con Astro/Pgn - bd-server/src/pages/company.astro";
const $$url = "/company";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Company,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
