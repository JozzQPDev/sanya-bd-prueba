import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_C0MrMJEo.mjs';
import 'piccolore';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_DLMoqZco.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Users = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch(`${"http://localhost:4321"}/api/users`);
  const users = response.ok ? await response.json() : [];
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "data-astro-cid-asi4dl7j": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container" data-astro-cid-asi4dl7j> <div class="header" data-astro-cid-asi4dl7j> <h1 data-astro-cid-asi4dl7j>Gestionar Usuarios</h1> <button id="addUserBtn" class="btn btn-primary" data-astro-cid-asi4dl7j>Agregar Usuario</button> </div> <div class="table-container" data-astro-cid-asi4dl7j> <table class="users-table" data-astro-cid-asi4dl7j> <thead data-astro-cid-asi4dl7j> <tr data-astro-cid-asi4dl7j> <th data-astro-cid-asi4dl7j>Usuario</th> <th data-astro-cid-asi4dl7j>Email</th> <th data-astro-cid-asi4dl7j>Rol</th> <th data-astro-cid-asi4dl7j>Activo</th> <th data-astro-cid-asi4dl7j>Creado</th> <th data-astro-cid-asi4dl7j>Acciones</th> </tr> </thead> <tbody id="usersTableBody" data-astro-cid-asi4dl7j> ${users.map((user) => renderTemplate`<tr${addAttribute(user.id, "data-id")} data-astro-cid-asi4dl7j> <td data-astro-cid-asi4dl7j>${user.username}</td> <td data-astro-cid-asi4dl7j>${user.email}</td> <td data-astro-cid-asi4dl7j>${user.role}</td> <td data-astro-cid-asi4dl7j>${user.is_active ? "Sí" : "No"}</td> <td data-astro-cid-asi4dl7j>${new Date(user.created_at).toLocaleDateString()}</td> <td data-astro-cid-asi4dl7j> <button class="btn btn-edit"${addAttribute(user.id, "data-id")} data-astro-cid-asi4dl7j>Editar</button> <button class="btn btn-delete"${addAttribute(user.id, "data-id")} data-astro-cid-asi4dl7j>Eliminar</button> </td> </tr>`)} </tbody> </table> </div> <!-- Modal for Add/Edit User --> <div id="userModal" class="modal" data-astro-cid-asi4dl7j> <div class="modal-content" data-astro-cid-asi4dl7j> <div class="modal-header" data-astro-cid-asi4dl7j> <h2 id="modalTitle" data-astro-cid-asi4dl7j>Agregar Usuario</h2> <span class="close" data-astro-cid-asi4dl7j>&times;</span> </div> <div class="modal-body" data-astro-cid-asi4dl7j> <form id="userForm" data-astro-cid-asi4dl7j> <input type="hidden" id="userId" name="id" data-astro-cid-asi4dl7j> <div class="form-group" data-astro-cid-asi4dl7j> <label for="username" data-astro-cid-asi4dl7j>Usuario:</label> <input type="text" id="username" name="username" required data-astro-cid-asi4dl7j> </div> <div class="form-group" data-astro-cid-asi4dl7j> <label for="email" data-astro-cid-asi4dl7j>Email:</label> <input type="email" id="email" name="email" required data-astro-cid-asi4dl7j> </div> <div class="form-group" data-astro-cid-asi4dl7j> <label for="password" data-astro-cid-asi4dl7j>Contraseña:</label> <input type="password" id="password" name="password" data-astro-cid-asi4dl7j> <small id="passwordHelp" data-astro-cid-asi4dl7j>Deja vacío para mantener la contraseña actual</small> </div> <div class="form-group" data-astro-cid-asi4dl7j> <label for="role" data-astro-cid-asi4dl7j>Rol:</label> <select id="role" name="role" required data-astro-cid-asi4dl7j> <option value="user" data-astro-cid-asi4dl7j>Usuario</option> <option value="admin" data-astro-cid-asi4dl7j>Administrador</option> </select> </div> <div class="form-group" data-astro-cid-asi4dl7j> <label class="checkbox-label" data-astro-cid-asi4dl7j> <input type="checkbox" id="is_active" name="is_active" checked data-astro-cid-asi4dl7j>
Activo
</label> </div> </form> </div> <div class="modal-footer" data-astro-cid-asi4dl7j> <button type="button" class="btn btn-secondary" id="cancelBtn" data-astro-cid-asi4dl7j>Cancelar</button> <button type="submit" form="userForm" class="btn btn-primary" data-astro-cid-asi4dl7j>Guardar</button> </div> </div> </div> </main> ` })} ${renderScript($$result, "C:/Paginas con Astro/Pgn - bd-server/src/pages/admin/users.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Paginas con Astro/Pgn - bd-server/src/pages/admin/users.astro", void 0);
const $$file = "C:/Paginas con Astro/Pgn - bd-server/src/pages/admin/users.astro";
const $$url = "/admin/users";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Users,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
