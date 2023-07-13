import { triviaApi } from './api';

const AUTH_URL = '/auth';

export const loginUser = (loginModel) => {
	return triviaApi
		.post(`${AUTH_URL}/login`, loginModel)
		.then((response) => response.data);
};

export const registerUser = (registerModel) => {
	return triviaApi
		.post(`${AUTH_URL}/register-admin`, registerModel)
		.then((response) => response.data);
};
