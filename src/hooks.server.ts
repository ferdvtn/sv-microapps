import type { User } from '$lib/types/user';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const auth_token = event.cookies.get('auth_token');
	if (auth_token) {
		// Get user from DB by token
		const user: User = {
			name: 'User'
		};

		event.locals.user = user;
	} else {
		event.locals.user = null;
	}

	return resolve(event);
};
