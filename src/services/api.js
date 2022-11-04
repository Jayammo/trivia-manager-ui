import axios from 'axios';
import { GetToken } from '../helper/CookieHandler';

export const triviaApi = axios.create({
	baseURL: 'https://localhost:7112/api',
	withCredentials: true,
});

triviaApi.interceptors.request.use((config) => {
	if (GetToken()) {
		config.headers['Authorization'] = `Bearer ${GetToken()}`;
	}
	return config;
});
