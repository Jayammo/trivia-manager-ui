import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DisplayCard } from '../../components/TriviaCard/index';
import { fetchAllTriviaEvent } from '../../services/TriviaManager/TriviaEventService';
import styled from '@emotion/styled';

export const StyledBox = styled(Box)`
	display: flex;
	justify-content: center;
`;

const TriviPage = () => {
	const [triviaEvents, setTriviaEvents] = useState([]);
	const navigate = useNavigate();

	const createNew = () => {
		navigate('/trivia/create');
	};

	useEffect(() => {
		const fetch = async () => {
			const triviaList = await fetchAllTriviaEvent();
			setTriviaEvents(triviaList);
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
				<StyledBox key={index}>
					<DisplayCard trivia={trivia} />
				</StyledBox>
			))}
		</>
	);
};

export default TriviPage;
