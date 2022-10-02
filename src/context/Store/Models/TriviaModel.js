import { action } from 'easy-peasy';

export const TriviaModel = {
	items: [
		{
			Id: 1,
			title: 'Drunk History Trivia',
			location: 'World of Beer',
		},
		{
			Id: 2,
			title: 'Bone Yard Trivia',
			location: 'Rockin Crab',
		},
	],
	add: action((state, payload) => {
		state.items.push(payload);
	}),
	remove: action((state, { Id }) => {
		console.log('Show ID =>', { state, Id });
		// const items = state.items.filter((item) => item.Id !== Id);
		return {
			...state,
			items: [],
		};
	}),
};
