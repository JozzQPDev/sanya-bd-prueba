import { s as supabaseServer } from '../../../chunks/supabaseServer_CDOImX3n.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  const formData = await request.formData();
  console.log(
    "FORM DATA:",
    Object.fromEntries(formData.entries())
  );
  const { error } = await supabaseServer.from("company_info").update({
    nombre: formData.get("nombre"),
    direccion: formData.get("direccion"),
    telefono: formData.get("telefono"),
    mail: formData.get("mail"),
    horario: formData.get("horario"),
    logo: formData.get("logo") || null
  }).eq("id", 1);
  if (error) {
    console.error("SUPABASE ERROR:", error);
    return new Response("Error", { status: 500 });
  }
  const { data: result, error: selectError } = await supabaseServer.from("company_info").select("*").eq("id", 1).single();
  if (selectError) {
    console.error("SELECT ERROR:", selectError);
  } else {
    console.log("UPDATED ROW:", result);
  }
  return new Response("OK", { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
