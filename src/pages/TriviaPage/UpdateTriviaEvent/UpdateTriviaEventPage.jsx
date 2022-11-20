import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EditableCard } from '../../../components/TriviaCard/index';
import useTriviaEventsMutation from '../../../hooks/TriviaEventsQuery/useTriviaEventsMutation';
import useTriviaEventsQuery from '../../../hooks/TriviaEventsQuery/useTriviaEventsQuery';
import { updateTriviaEvent } from '../../../services/TriviaManager/TriviaEventService';
import { yupSchema } from '../YupSchema';

export const StyledBox = styled(Box)`
	display: flex;
	justify-content: center;
`;

const UpdateTriviaEventPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [triviaEvent, setTriviaEvent] = useState();

	const { isLoading, error, isFetched, triviaEvents } = useTriviaEventsQuery();

	const { mutateAsync } = useTriviaEventsMutation({
		mutationFn: updateTriviaEvent,
	});

	useEffect(() => {
		if (isFetched) {
			setTriviaEvent(triviaEvents.find((trivia) => trivia.id === id));
		}
	}, [id, triviaEvents]);

	const submitCallback = async (updateTrivia) => {
		await mutateAsync(updateTrivia);
		navigate('/trivia');
	};

	if (isLoading || !triviaEvent) return '...loading';

	if (error) return `An error has occurred: ${error.message}`;

	return (
		<StyledBox>
			<EditableCard
				submitCallback={submitCallback}
				yupSchema={yupSchema}
				triviaEvent={triviaEvent}
			/>
		</StyledBox>
	);
};

export default UpdateTriviaEventPage;
