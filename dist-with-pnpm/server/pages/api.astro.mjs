import { toInteger } from 'npm:lodash';
export { renderers } from '../renderers.mjs';

const POST = () => {
  const int = toInteger("1");
  return new Response(`hello world ${int} `);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
