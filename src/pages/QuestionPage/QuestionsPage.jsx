import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import useQuestionQuery from '../../hooks/QuestionsQuery/useQuestionQuery';
import DisplayQuestionCollectionCard from '../../components/QuestionCollectionCard/Display/DisplayQuestionCollectionCard';

export const StyledBox = styled(Box)`
	display: flex;
	justify-content: center;
`;

const QuestionsPage = () => {
	const navigate = useNavigate();

	const { isLoading, error, questionCollections } = useQuestionQuery();

	const createNew = () => {
		navigate('/questions');
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
			{questionCollections.map((questionCollection, index) => (
				<StyledBox key={index}>
					<DisplayQuestionCollectionCard
						questionCollection={questionCollection}
					/>
				</StyledBox>
			))}
		</>
	);
};

export default QuestionsPage;
