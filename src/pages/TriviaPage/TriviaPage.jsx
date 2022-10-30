import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import { DisplayCard } from '../../components/TriviaCard/index';
import { fetchAllTriviaEvent } from '../../services/TriviaManager/TriviaEventService';

const TriviPage = () => {
	const navigate = useNavigate();
	const authHeader = useAuthHeader();

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
	useEffect(() => {
		const fetch = async () => {
			console.log(authHeader());
			const triviaList = await fetchAllTriviaEvent();
			console.log({ triviaList });
		};
		fetch();
	}, []);
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
