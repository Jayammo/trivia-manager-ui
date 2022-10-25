import axios from 'axios';

export const triviaApi = axios.create({
	baseURL: 'https://localhost:7112/api',
	withCredentials: true,
});
