import type { APIRoute } from "astro";
import { isNumber } from "remeda"
export const GET: APIRoute = () => {
    const int = isNumber("1")
    return new Response(`hello world ${int} `)
}