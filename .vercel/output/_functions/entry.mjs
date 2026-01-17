import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Cn313rbO.mjs';
import { manifest } from './manifest_xU3kDjYu.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/company/update.astro.mjs');
const _page2 = () => import('./pages/api/login.astro.mjs');
const _page3 = () => import('./pages/company.astro.mjs');
const _page4 = () => import('./pages/dashboard.astro.mjs');
const _page5 = () => import('./pages/login.astro.mjs');
const _page6 = () => import('./pages/register.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/company/update.ts", _page1],
    ["src/pages/api/login.ts", _page2],
    ["src/pages/company.astro", _page3],
    ["src/pages/dashboard.astro", _page4],
    ["src/pages/login.astro", _page5],
    ["src/pages/register.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "ce2a2f68-6c82-4f82-b99c-9e026f5e1632",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
