import { Box, Button } from '@mui/material';
import TriviaCard from '../../components/TriviaCard/TriviaCard';

const TriviPage = () => {
	const createNew = () => {};

	return (
		<>
			<Box>
				<Button variant='outlined' onClick={createNew}>
					Create New
				</Button>
			</Box>
			{[].map((trivia, index) => (
				<Box key={index} style={{ display: 'flex', justifyContent: 'center' }}>
					<TriviaCard trivia={trivia} />
				</Box>
			))}
		</>
	);
};

export default TriviPage;
