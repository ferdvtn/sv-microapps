import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (e) => {
	await e.parent();

	return {};
};
