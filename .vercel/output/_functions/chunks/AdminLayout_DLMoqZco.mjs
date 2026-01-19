import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, n as renderSlot, k as renderComponent, o as renderHead } from './astro/server_C0MrMJEo.mjs';
import 'piccolore';
import 'clsx';
import { s as supabaseServer } from './supabaseServer_C-72eZQB.mjs';
/* empty css                           */
import { s as supabase } from './supabase_BaTEaPYx.mjs';

const $$Astro$1 = createAstro();
const $$AdminSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AdminSidebar;
  const session = Astro2.cookies.get("session")?.value;
  const { data: user } = await supabaseServer.from("users").select("role, username").eq("id", session).single();
  const pathname = Astro2.url.pathname;
  const isActive = (path) => path === "/dashboard" ? pathname === path : pathname.startsWith(path);
  return renderTemplate`<!-- SIDEBAR -->${maybeRenderHead()}<aside class="sidebar" aria-label="Panel administrativo" data-astro-cid-dyjmb3d6> <!-- HEADER --> <header class="sidebar-header" data-astro-cid-dyjmb3d6> <div class="sidebar-brand" data-astro-cid-dyjmb3d6> <i data-lucide="settings" data-astro-cid-dyjmb3d6></i> <h2 data-astro-cid-dyjmb3d6>Admin Panel</h2> </div> <div class="user-info" data-astro-cid-dyjmb3d6> <span class="user-name" data-astro-cid-dyjmb3d6>${user?.username ?? "Usuario"}</span> <span class="user-role" data-astro-cid-dyjmb3d6> ${user?.role === "admin" ? "Administrador" : "Usuario"} </span> </div> </header> <!-- NAV --> <nav class="sidebar-nav" data-astro-cid-dyjmb3d6> <section class="nav-section" data-astro-cid-dyjmb3d6> <h3 data-astro-cid-dyjmb3d6>Principal</h3> <a href="/dashboard"${addAttribute(`sidebar-link ${isActive("/dashboard") ? "active" : ""}`, "class")} data-astro-cid-dyjmb3d6> <i data-lucide="layout-dashboard" data-astro-cid-dyjmb3d6></i> <span data-astro-cid-dyjmb3d6>Dashboard</span> </a> </section> <section class="nav-section" data-astro-cid-dyjmb3d6> <h3 data-astro-cid-dyjmb3d6>Gestión</h3> <a href="/admin/company"${addAttribute(`sidebar-link ${isActive("/admin/company") ? "active" : ""}`, "class")} data-astro-cid-dyjmb3d6> <i data-lucide="building-2" data-astro-cid-dyjmb3d6></i> <span data-astro-cid-dyjmb3d6>Empresa</span> </a> <a href="/admin/users"${addAttribute(`sidebar-link ${isActive("/admin/users") ? "active" : ""}`, "class")} data-astro-cid-dyjmb3d6> <i data-lucide="users" data-astro-cid-dyjmb3d6></i> <span data-astro-cid-dyjmb3d6>Usuarios</span> </a> <a href="/admin/orders"${addAttribute(`sidebar-link ${isActive("/admin/orders") ? "active" : ""}`, "class")} data-astro-cid-dyjmb3d6> <i data-lucide="package" data-astro-cid-dyjmb3d6></i> <span data-astro-cid-dyjmb3d6>Pedidos</span> </a> <a href="/admin/reports"${addAttribute(`sidebar-link ${isActive("/admin/reports") ? "active" : ""}`, "class")} data-astro-cid-dyjmb3d6> <i data-lucide="bar-chart-3" data-astro-cid-dyjmb3d6></i> <span data-astro-cid-dyjmb3d6>Reportes</span> </a> </section> ${user?.role === "admin" && renderTemplate`<section class="nav-section" data-astro-cid-dyjmb3d6> <h3 data-astro-cid-dyjmb3d6>Administración</h3> <a href="/admin/settings"${addAttribute(`sidebar-link ${isActive("/admin/settings") ? "active" : ""}`, "class")} data-astro-cid-dyjmb3d6> <i data-lucide="settings" data-astro-cid-dyjmb3d6></i> <span data-astro-cid-dyjmb3d6>Configuración</span> </a> </section>`} </nav> <!-- FOOTER --> <footer class="sidebar-footer" data-astro-cid-dyjmb3d6> <form method="POST" action="/api/logout" data-astro-cid-dyjmb3d6> <button class="logout-btn" data-astro-cid-dyjmb3d6> <i data-lucide="log-out" data-astro-cid-dyjmb3d6></i> <span data-astro-cid-dyjmb3d6>Cerrar Sesión</span> </button> </form> </footer> </aside> `;
}, "C:/Paginas con Astro/Pgn - bd-server/src/components/AdminSidebar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$AdminLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
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
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-2kanml4j> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>Panel Administrativo - ", '</title><link rel="icon"', ' type="image/png">', '</head> <body data-astro-cid-2kanml4j> <div class="admin-layout" data-astro-cid-2kanml4j> ', ' <div class="main-content" data-astro-cid-2kanml4j> ', ' </div> </div> <script src="https://unpkg.com/lucide@latest"><\/script> <script>\n    window.lucide?.createIcons();\n  <\/script> </body></html>'])), addAttribute(Astro2.generator, "content"), data.nombre, addAttribute(data.logo, "href"), renderHead(), renderComponent($$result, "AdminSidebar", $$AdminSidebar, { "data-astro-cid-2kanml4j": true }), renderSlot($$result, $$slots["default"]));
}, "C:/Paginas con Astro/Pgn - bd-server/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $ };
