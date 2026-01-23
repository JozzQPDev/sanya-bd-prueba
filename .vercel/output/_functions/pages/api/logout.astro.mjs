import { s as supabaseServer } from '../../chunks/supabaseServer_CDOImX3n.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ cookies, redirect }) => {
  const sessionToken = cookies.get("session")?.value;
  if (sessionToken) {
    await supabaseServer.from("sessions").delete().eq("id", sessionToken);
  }
  cookies.set("session", "", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0
  });
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
