import { Box } from '@mui/material';
import TriviaCard from '../../components/TriviaCard/TriviaCard';

const TriviPage = () => {
	const trivias = [
		{
			title: 'Drunk History Trivia',
			location: 'World of Beer',
		},
		{
			title: 'Bone Yard Trivia',
			location: 'Rockin Crab',
		},
	];

	return trivias.map((trivia, index) => (
		<Box key={index} style={{ display: 'flex', justifyContent: 'center' }}>
			<TriviaCard trivia={trivia} />
		</Box>
	));
};

export default TriviPage;
