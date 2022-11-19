import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { EditableCard } from '../../../components/TriviaCard/index';
import { createTriviaEvent } from '../../../services/TriviaManager/TriviaEventService';
import { yupSchema } from '../YupSchema';

export const StyledBox = styled(Box)`
	display: flex;
	justify-content: center;
`;

const CreateTriviaEventPage = () => {
	const navigate = useNavigate();
	const { mutateAsync, error } = useMutation({ mutationFn: createTriviaEvent });

	const submitCallback = async (newTriviaEvent) => {
		await mutateAsync(newTriviaEvent);
		navigate('/trivia');
	};

	if (error) return `An error has occurred: ${error.message}`;

	return (
		<StyledBox>
			<EditableCard submitCallback={submitCallback} yupSchema={yupSchema} />
		</StyledBox>
	);
};

export default CreateTriviaEventPage;
