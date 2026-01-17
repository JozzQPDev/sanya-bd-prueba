import { s as supabase } from '../../../chunks/supabase_Ajqi_3IU.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  const data = await request.formData();
  const { error } = await supabase.from("company_info").update({
    nombre: data.get("nombre"),
    direccion: data.get("direccion"),
    telefono: data.get("telefono"),
    mail: data.get("mail"),
    horario: data.get("horario"),
    logo: data.get("logo") || null
  }).eq("id", 1);
  if (error) {
    console.error(error);
    return new Response("Error", { status: 500 });
  }
  return new Response("OK", { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
