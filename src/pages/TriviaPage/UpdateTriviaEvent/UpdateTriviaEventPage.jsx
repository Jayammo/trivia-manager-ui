import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EditableCard } from '../../../components/TriviaCard/index';
import {
	fetchTrivia,
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
	const [triviaEvent, setTriviaEvent] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetch = async () => {
			const response = await fetchTrivia(id);
			setTriviaEvent(response);
			setLoading(false);
		};
		fetch();
	}, [id]);

	const submitCallback = async (updateTrivia) => {
		await updateTriviaEvent(updateTrivia);
		navigate('/trivia');
	};

	if (loading) return '...loading';

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
