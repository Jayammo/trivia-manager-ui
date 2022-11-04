import jwt_decode from 'jwt-decode';

export const GetToken = () => {
	return sessionStorage.getItem('_triviaCookie');
};

export const SetCookie = (token) => {
	sessionStorage.setItem('_triviaCookie', token);
};

export const DecodeToken = () => {
	const token = GetToken();
	if (!token) {
		return {};
	}
	return jwt_decode(token);
};
