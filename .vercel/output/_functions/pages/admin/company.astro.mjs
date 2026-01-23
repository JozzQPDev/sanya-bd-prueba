import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderScript } from '../../chunks/astro/server_C0MrMJEo.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_ibCpxHNG.mjs';
import { s as supabase } from '../../chunks/supabase_BaTEaPYx.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Company = createComponent(async ($$result, $$props, $$slots) => {
  const COMPANY_ID = 1;
  const { data: company, error } = await supabase.from("company_info").select("*").eq("id", COMPANY_ID).single();
  if (error) {
    throw new Error("Error cargando datos de la empresa");
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "data-astro-cid-hejrmat5": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container" data-astro-cid-hejrmat5> <form id="companyForm" class="admin-grid" data-astro-cid-hejrmat5> <!-- LOGO --> <div class="logo-card" data-astro-cid-hejrmat5> <div class="logo-preview" data-astro-cid-hejrmat5> ${company.logo ? renderTemplate`<img${addAttribute(company.logo, "src")} data-astro-cid-hejrmat5>` : renderTemplate`<span data-astro-cid-hejrmat5>Sin logo</span>`} </div> <h1 data-astro-cid-hejrmat5>${company.nombre}</h1> </div> <!-- FORM --> <div class="form-card" data-astro-cid-hejrmat5> <div class="fields" data-astro-cid-hejrmat5> <div class="field" data-astro-cid-hejrmat5> <label data-astro-cid-hejrmat5>Nombre</label> <input name="nombre"${addAttribute(company.nombre, "value")} required data-astro-cid-hejrmat5> </div> <div class="field" data-astro-cid-hejrmat5> <label data-astro-cid-hejrmat5>Dirección</label> <input name="direccion"${addAttribute(company.direccion, "value")} required data-astro-cid-hejrmat5> </div> <div class="field" data-astro-cid-hejrmat5> <label data-astro-cid-hejrmat5>Teléfono</label> <input name="telefono"${addAttribute(company.telefono, "value")} required data-astro-cid-hejrmat5> </div> <div class="field" data-astro-cid-hejrmat5> <label data-astro-cid-hejrmat5>Email</label> <input type="email" name="mail"${addAttribute(company.mail, "value")} required data-astro-cid-hejrmat5> </div> <div class="field full" data-astro-cid-hejrmat5> <label data-astro-cid-hejrmat5>Horario</label> <input name="horario"${addAttribute(company.horario, "value")} required data-astro-cid-hejrmat5> </div> <div class="field full" data-astro-cid-hejrmat5> <label data-astro-cid-hejrmat5>URL del Logo</label> <input name="logo"${addAttribute(company.logo ?? "", "value")} data-astro-cid-hejrmat5> </div> </div> <button class="btn" type="submit" data-astro-cid-hejrmat5>Guardar Cambios</button> </div> </form> ${renderScript($$result2, "C:/Paginas con Astro/Pgn - bd-server/src/pages/admin/company.astro?astro&type=script&index=0&lang.ts")} </main> ` })} `;
}, "C:/Paginas con Astro/Pgn - bd-server/src/pages/admin/company.astro", void 0);

const $$file = "C:/Paginas con Astro/Pgn - bd-server/src/pages/admin/company.astro";
const $$url = "/admin/company";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Company,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
