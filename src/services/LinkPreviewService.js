import { triviaApi } from './api';

const LINK_PREVIEW = '/link/preview';

export const fetchLinkPreview = (link) => {
	return triviaApi
		.get(`${LINK_PREVIEW}?link=` + encodeURIComponent(link))
		.then((response) => response.data);
};
