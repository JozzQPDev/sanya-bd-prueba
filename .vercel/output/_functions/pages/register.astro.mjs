import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_B1VBhITs.mjs';
import 'piccolore';
import 'clsx';
import { s as supabase } from '../chunks/supabase_Ajqi_3IU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  let errorMsg = "";
  if (Astro2.request.method === "POST") {
    const form = await Astro2.request.formData();
    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();
    const username = form.get("username")?.toString();
    if (!email || !password || !username) {
      errorMsg = "Completa todos los campos";
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });
      if (error) {
        errorMsg = error.message;
      } else {
        await supabase.from("profiles").insert({
          id: data.user?.id,
          email,
          username
        });
        return Astro2.redirect("/login");
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<form method="POST"> <h1>Registro</h1> <input name="username" placeholder="Usuario" required> <input name="email" type="email" placeholder="Correo" required> <input name="password" type="password" placeholder="Contraseña" required> <button>Registrarse</button> ${errorMsg && renderTemplate`<p style="color:red">${errorMsg}</p>`} </form>`;
}, "C:/Paginas con Astro/Pgn - bd-server/src/pages/register.astro", void 0);

const $$file = "C:/Paginas con Astro/Pgn - bd-server/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
