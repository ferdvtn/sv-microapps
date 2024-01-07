import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const images: String[] = ['cat-1.jpg', 'cat-2.jpg', 'cat-3.jpg'];

	return {
		images
	};
};
