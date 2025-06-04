import { isDev } from '@lib/utils'
import { getViewsBySlugFromDB } from './db'
import { getViewsBySlugFromMock } from './in-memory'

export async function getViewsBySlug(slug: string) {
  return isDev ? await getViewsBySlugFromMock(slug) : await getViewsBySlugFromDB(slug)
}
