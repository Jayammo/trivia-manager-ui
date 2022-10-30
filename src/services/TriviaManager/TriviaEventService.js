import { triviaApi } from '../api';

const TRIVIA_EVENT = '/trivia/event';

export const fetchAllTriviaEvent = () => {
	return triviaApi
		.get(`${TRIVIA_EVENT}/all`)
		.then(({ request }) => request.response);
};

export const createTriviaEvent = (newTriviaEvent) => {
	return triviaApi.post(`${TRIVIA_EVENT}`, newTriviaEvent).then(console.log);
};
