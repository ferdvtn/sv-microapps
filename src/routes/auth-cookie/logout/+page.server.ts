import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (e) => {
	return redirect(302, '/auth-cookie');
};

export const actions: Actions = {
	default: (e) => {
		e.cookies.delete('auth_token', { path: '/auth-cookie' });

		return redirect(302, '/auth-cookie');
	}
};
