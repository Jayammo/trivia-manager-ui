import styled from '@emotion/styled';
import { Box } from '@mui/system';
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

	const submitCallback = async (e) => {
		await createTriviaEvent(e);
		navigate('/trivia');
	};

	return (
		<StyledBox>
			<EditableCard submitCallback={submitCallback} yupSchema={yupSchema} />
		</StyledBox>
	);
};

export default CreateTriviaEventPage;
