import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B82oSJCW.mjs';
import { manifest } from './manifest_BHySWKrg.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/company.astro.mjs');
const _page2 = () => import('./pages/admin/orders.astro.mjs');
const _page3 = () => import('./pages/admin/settings.astro.mjs');
const _page4 = () => import('./pages/admin/users.astro.mjs');
const _page5 = () => import('./pages/api/company/update.astro.mjs');
const _page6 = () => import('./pages/api/login.astro.mjs');
const _page7 = () => import('./pages/api/logout.astro.mjs');
const _page8 = () => import('./pages/api/users/create.astro.mjs');
const _page9 = () => import('./pages/api/users/_id_.astro.mjs');
const _page10 = () => import('./pages/api/users.astro.mjs');
const _page11 = () => import('./pages/dashboard.astro.mjs');
const _page12 = () => import('./pages/login.astro.mjs');
const _page13 = () => import('./pages/register.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/company.astro", _page1],
    ["src/pages/admin/orders.astro", _page2],
    ["src/pages/admin/settings.astro", _page3],
    ["src/pages/admin/users.astro", _page4],
    ["src/pages/api/company/update.ts", _page5],
    ["src/pages/api/login.ts", _page6],
    ["src/pages/api/logout.ts", _page7],
    ["src/pages/api/users/create.ts", _page8],
    ["src/pages/api/users/[id].ts", _page9],
    ["src/pages/api/users/index.ts", _page10],
    ["src/pages/dashboard.astro", _page11],
    ["src/pages/login.astro", _page12],
    ["src/pages/register.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "3813699f-1aac-47cd-92f0-b8937576cc6b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
