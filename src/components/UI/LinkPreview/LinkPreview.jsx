import { Card, CardContent } from '@mui/material';
import FormTextField from '../Form/FormTextField';
import { useState } from 'react';
import { fetchLinkPreview } from '../../../services/LinkPreviewService';
const LinkPreview = ({ control, name, label }) => {
	const [linkPreview, setLinkPreview] = useState();
	return (
		<>
			<FormTextField
				control={control}
				name={name}
				label={label}
				onBlur={(e) => {
					setLinkPreview(e.target.value);
					fetchLinkPreview(e.target.value);
				}}
			/>
			<Card>
				<CardContent>{linkPreview}</CardContent>
			</Card>
		</>
	);
};

export default LinkPreview;
