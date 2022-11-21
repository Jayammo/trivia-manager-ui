import { useQuery } from '@tanstack/react-query';

const fetchQuestionCollectionMock = () => {
	const questionCollections = [
		{
			title: 'Math Questions',
			description: 'These questions are only about math related questions',
		},
		{
			title: 'Movie Questions',
			description: 'These questions are related to movies',
		},
		{
			title: 'Horror Movies Questions',
			description:
				'These questions are related to horror movies for the most part',
		},
	];

	return Promise.resolve(questionCollections);
};

const useQuestionQuery = () => {
	const {
		isLoading,
		error,
		isFetched,
		data: questionCollections,
	} = useQuery({
		queryKey: ['questionCollection'],
		queryFn: fetchQuestionCollectionMock,
		staleTime: 1000 * 60,
	});

	return { isLoading, error, questionCollections, isFetched };
};

export default useQuestionQuery;
