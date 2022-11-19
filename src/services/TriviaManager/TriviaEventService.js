import { triviaApi } from '../api';

const TRIVIA_EVENT = '/trivia/event';

export const fetchAllTriviaEvent = () => {
	return triviaApi.get(`${TRIVIA_EVENT}`).then((response) => response.data);
};

export const fetchTrivia = (id) => {
	return triviaApi
		.get(`${TRIVIA_EVENT}/${id}`)
		.then((response) => response.data);
};

export const createTriviaEvent = (newTriviaEvent) => {
	return triviaApi
		.post(`${TRIVIA_EVENT}`, newTriviaEvent)
		.then((response) => response.data);
};

export const updateTriviaEvent = (updateTriviaEvent) => {
	const { id } = updateTriviaEvent;
	return triviaApi
		.put(`${TRIVIA_EVENT}/${id}`, updateTriviaEvent)
		.then((response) => response.data);
};

export const removeTriviaEvent = (id) => {
	return triviaApi
		.delete(`${TRIVIA_EVENT}/${id}`)
		.then((response) => response.data);
};
