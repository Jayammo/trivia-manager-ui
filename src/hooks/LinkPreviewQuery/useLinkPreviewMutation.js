import { useMutation, useQueryClient } from '@tanstack/react-query';

const useLinkPreviewMutation = ({ mutationFn }) => {
	const queryClient = useQueryClient();

	const { mutateAsync, error } = useMutation({
		mutationKey: ['LinkPreview'],
		mutationFn: mutationFn,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: 'LinkPreview' });
		},
	});

	return { mutateAsync, error };
};

export default useLinkPreviewMutation;
