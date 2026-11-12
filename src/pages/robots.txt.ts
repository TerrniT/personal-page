import type { APIRoute } from 'astro'

import { SITE } from '@consts'

const origin = `https://${SITE.DOMAIN}`

const robotsTxt = `
User-agent: *
Allow: /

Host: ${SITE.DOMAIN}

Sitemap: ${origin}/sitemap-index.xml
`.trim()

export const prerender = true

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
