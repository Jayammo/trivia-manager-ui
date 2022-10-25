import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DisplayCard } from '../../components/TriviaCard/index';
import TriviaCard from '../../components/TriviaCard/DisplayCard/DisplayCard';

const TriviPage = () => {
	const navigate = useNavigate();
	const createNew = () => {
		navigate('/trivia/create');
	};
	const triviaEvents = [
		{
			title: 'Trivia Event',
			startTime: 'Start Time',
			locationName: 'Location',
			adress: 'Adress',
		},
	];

	return (
		<>
			<Box>
				<Button variant='outlined' onClick={createNew}>
					Create New
				</Button>
			</Box>
			{triviaEvents.map((trivia, index) => (
				<Box key={index} style={{ display: 'flex', justifyContent: 'center' }}>
					<DisplayCard trivia={trivia} />
				</Box>
			))}
		</>
	);
};

export default TriviPage;
