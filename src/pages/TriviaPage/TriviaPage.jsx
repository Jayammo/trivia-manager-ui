import { Box, Button, Divider } from '@mui/material';
import TriviaCard from '../../components/TriviaCard/TriviaCard';
import { useStoreState, useStoreActions } from 'easy-peasy';

const TriviPage = () => {
	const trivias = useStoreState((state) => state.trivias.items);
	const { add: createTriviaEvent } = useStoreActions(
		(actions) => actions.trivias
	);

	const createNew = () => {
		createTriviaEvent({
			Id: 3,
			title: 'New World Trivia',
			location: 'Farm House BBQ',
		});
	};

	return (
		<>
			<Box>
				<Button variant='outlined' onClick={createNew}>
					Create New
				</Button>
			</Box>
			{trivias.map((trivia, index) => (
				<Box key={index} style={{ display: 'flex', justifyContent: 'center' }}>
					<TriviaCard trivia={trivia} />
				</Box>
			))}
		</>
	);
};

export default TriviPage;
