import type { APIRoute } from 'astro'
import { getViewsBySlug } from '@lib/views'

// In development/HMR, you can accidentally make this call numerous times and exceed your quota...
// thus, the in-memory version of `getViewsBySlug` is used

export const GET: APIRoute = async ({ params }) => {
  return new Response(
    JSON.stringify({
      views: params.slug ? await getViewsBySlug(params.slug) : 0,
    }),
  )
}
