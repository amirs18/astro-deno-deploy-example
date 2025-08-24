import type { APIRoute } from "astro";
import { toInteger } from "lodash"
export const POST: APIRoute = () => {
    const int = toInteger("1")
    return new Response(`hello world ${int} `)
}