import { getViewsBySlugFromMock } from './in-memory'

export async function getViewsBySlug(slug: string) {
  return await getViewsBySlugFromMock(slug)
}
