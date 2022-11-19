import { Box, Button } from '@mui/material';
// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DisplayCard } from '../../components/TriviaCard/index';
import { fetchAllTriviaEvent } from '../../services/TriviaManager/TriviaEventService';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';

export const StyledBox = styled(Box)`
	display: flex;
	justify-content: center;
`;

const TriviPage = () => {
	const navigate = useNavigate();

	const {
		isLoading,
		error,
		data: triviaEvents,
	} = useQuery({ queryKey: ['triviaEvents'], queryFn: fetchAllTriviaEvent });

	const createNew = () => {
		navigate('/trivia/create');
	};

	if (isLoading) return '...Loading';

	if (error) return `An error has occurred: ${error.message}`;

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
