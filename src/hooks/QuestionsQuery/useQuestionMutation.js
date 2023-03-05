import { useMutation, useQueryClient } from '@tanstack/react-query';

const useQuestionMutation = ({ mutationFn }) => {
	const queryClient = useQueryClient();

	const { mutateAsync, error } = useMutation({
		mutationKey: ['questionCollection'],
		mutationFn: mutationFn,
		onMutate: (newData) => {
			queryClient.setQueryData('questionCollection', (oldData) => [
				...oldData,
				newData,
			]);
		},
	});

	return { mutateAsync, error };
};

export default useQuestionMutation;
