import { createStore, persist } from 'easy-peasy';
import { TriviaModel } from './Models/TriviaModel';

export const store = createStore(
	persist({
		trivias: TriviaModel,
	})
);
