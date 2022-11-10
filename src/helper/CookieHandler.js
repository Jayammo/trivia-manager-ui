import jwt_decode from 'jwt-decode';

export const GetToken = () => {
	return sessionStorage.getItem('_triviaCookie');
};

export const SetToken = (token) => {
	sessionStorage.setItem('_triviaCookie', token);
};

export const DecodeToken = (token) => {
	if (token) {
		return jwt_decode(token);
	}

	const sessionToken = GetToken();
	console.log({ sessionToken });
	if (sessionToken) {
		return jwt_decode(sessionToken);
	}
	return;
};

export const Logout = () => {
	sessionStorage.clear();
	window.location.reload();
};
