import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DisplayCard } from '../../components/TriviaCard/index';
import styled from '@emotion/styled';
import useTriviaEventsQuery from '../../hooks/TriviaEventsQuery/useTriviaEventsQuery';

export const StyledBox = styled(Box)`
	display: flex;
	justify-content: center;
`;

const TriviPage = () => {
	const navigate = useNavigate();

	const { isLoading, error, triviaEvents } = useTriviaEventsQuery();

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
