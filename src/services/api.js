import axios from 'axios';
import { getToken } from '../helper/CookieHandler';

export const triviaApi = axios.create({
	baseURL: 'https://localhost:7112/api',
	withCredentials: true,
});

triviaApi.interceptors.request.use((config) => {
	if (getToken('_triviaCookie')) {
		config.headers['Authorization'] = `Bearer ${getToken('_triviaCookie')}`;
	}
	return config;
});
