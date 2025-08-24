import type { APIRoute } from "astro";
import { isNumber } from "remeda"
export const POST: APIRoute = () => {
    const int = isNumber("1")
    return new Response(`hello world ${int} `)
}