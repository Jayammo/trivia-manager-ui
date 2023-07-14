import { useQuery } from '@tanstack/react-query';
import { fetchLinkPreview } from '../../services/LinkPreviewService';

const useLinkPreviewQuery = () => {
	const {
		isLoading,
		error,
		isFetched,
		data: linkPreview,
	} = useQuery({
		queryKey: ['LinkPreview'],
		queryFn: fetchLinkPreview,
		staleTime: 1000 * 60,
	});

	return { isLoading, error, linkPreview, isFetched };
};

export default useLinkPreviewQuery;
