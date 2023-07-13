import { useQuery } from '@tanstack/react-query';
import { fetchAllTriviaEvent } from '../../services/TriviaEventService';

const useTriviaEventsQuery = () => {
	const {
		isLoading,
		error,
		isFetched,
		data: triviaEvents,
	} = useQuery({
		queryKey: ['triviaEvents'],
		queryFn: fetchAllTriviaEvent,
		staleTime: 1000 * 60,
	});

	return { isLoading, error, triviaEvents, isFetched };
};

export default useTriviaEventsQuery;
