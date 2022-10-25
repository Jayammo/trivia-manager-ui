import { triviaApi } from '../api';

const AUTH_URL = 'auth';

export const login = (loginModel) => {
	return triviaApi
		.post(`${AUTH_URL}/login`, loginModel)
		.then(({ request }) => request.response);
};

export const register = (registerModel) => {
	return triviaApi
		.post(`${AUTH_URL}/register-admin`, registerModel)
		.then(({ request }) => request.response);
};
