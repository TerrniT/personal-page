import { getViewsBySlugFromMock } from './in-memory';
import { getViewsBySlugFromDB } from './db';
import { isDev } from '@lib/utils';

export const getViewsBySlug = async (slug: string) => {
	return !isDev ? await getViewsBySlugFromMock(slug) : await getViewsBySlugFromDB(slug);
}