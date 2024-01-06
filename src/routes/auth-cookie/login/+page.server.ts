import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (e) => {
	if (e.locals.user) {
		return redirect(302, '/auth-cookie');
	}

	return {};
};

export const actions: Actions = {
	default: async (e) => {
		const formData = await e.request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		if (username !== 'admin' || password !== '123') {
			return { error: true, message: 'user not found', username, password };
		}

		e.cookies.set('auth_token', 'admin', { path: '/auth-cookie', maxAge: 60 * 60 });

		return redirect(302, '/auth-cookie');
	}
};
