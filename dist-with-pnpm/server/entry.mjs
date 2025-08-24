import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CNnjXhKA.mjs';
import { manifest } from './manifest_DCoqBfMy.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.13.3_@types+node@24_ae564e82215ffbe1d0f62d4357ef5ff9/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/index.ts", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "prefixNpmForDenoDeploy": true,
    "relativeClientPath": "..\\..\\client/"
};
const _exports = createExports(_manifest, _args);
const stop = _exports['stop'];
const handle = _exports['handle'];
const start = _exports['start'];
const running = _exports['running'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handle, pageMap, running, start, stop };
