import { triviaApi } from '../api';

const TRIVIA_EVENT = 'TriviaEvent';

export const triviaEventFetchAll = () => {
	return triviaApi.get(`${TRIVIA_EVENT}/all`).then(console.log);
};
