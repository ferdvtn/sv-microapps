import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (e) => {
	const searchParams = new URLSearchParams(e.url.searchParams);
	const radioString = searchParams.get('radio-string');
	const radioNumber = searchParams.get('radio-number');

	return {
		error: false,
		radio_string: radioString,
		radio_number: radioNumber
	};
};
