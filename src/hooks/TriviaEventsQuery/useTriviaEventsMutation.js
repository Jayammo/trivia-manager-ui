import { useMutation, useQueryClient } from '@tanstack/react-query';

const useTriviaEventsMutation = ({ mutationFn }) => {
	const queryClient = useQueryClient();

	const { mutateAsync, error } = useMutation({
		mutationKey: ['triviaEvents'],
		mutationFn: mutationFn,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: 'triviaEvents' });
		},
	});

	return { mutateAsync, error };
};

export default useTriviaEventsMutation;
