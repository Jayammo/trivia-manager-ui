import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EditableCard } from '../../../components/TriviaCard/index';
import {
	fetchAllTriviaEvent,
	updateTriviaEvent,
} from '../../../services/TriviaManager/TriviaEventService';
import { yupSchema } from '../YupSchema';

export const StyledBox = styled(Box)`
	display: flex;
	justify-content: center;
`;

const UpdateTriviaEventPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [triviaEvent, setTriviaEvent] = useState();

	const {
		isLoading,
		error,
		data: triviaEvents,
	} = useQuery({
		queryKey: ['triviaEvents'],
		queryFn: fetchAllTriviaEvent,
		staleTime: 1000 * 60,
	});

	const { mutateAsync } = useMutation({
		mutationKey: ['triviaEvents'],
		mutationFn: updateTriviaEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: 'triviaEvents' });
		},
	});

	useEffect(() => {
		if (!isLoading) {
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
