import type { APIRoute } from 'astro'

const site = import.meta.env.SITE ?? 'https://terrnit.com'

const robotsTxt = `
User-agent: *
Allow: /

Host: ${new URL(site).host}
`.trim()

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
