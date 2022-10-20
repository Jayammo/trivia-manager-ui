import axios from 'axios';

export const triviaApi = axios.create({
	baseURL: 'https://localhost:7112/api',
});

triviaApi.interceptors.response.use(
	(config) => {
		console.log('Hello =>', { config });
		return config;
	},
	(error) => {
		console.log('Hello Error =>', error);
		return Promise.reject(error);
	}
);
