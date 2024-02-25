import { Box, Card, CardMedia, Link, Typography } from '@mui/material';
import FormTextField from '../Form/FormTextField';
import useLinkPreviewQuery from '../../../hooks/LinkPreviewQuery/useLinkPreviewQuery';

const LinkPreview = ({ control, name, label }) => {
	const { isLoading, error, linkPreview } = useLinkPreviewQuery();
	// const { mutateAsync } = useLinkPreviewMutation();

	if (isLoading) return '...loading';

	if (error) return `An error has occurred: ${error.message}`;

	return (
		<>
			<FormTextField
				control={control}
				name={name}
				label={label}
				onBlur={async () => {}}
			/>
			{linkPreview && (
				<Card sx={{ display: 'flex' }}>
					<Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
						<Typography sx={{ flex: '1 0 auto', padding: '16px 8px' }}>
							{linkPreview.title}
						</Typography>
						<Link
							href={linkPreview.link}
							sx={{ flex: '1 0 auto', padding: '16px 8px' }}
							target='_blank'
						>
							{linkPreview.title}
						</Link>

						<Typography sx={{ flex: '1 0 auto', padding: '16px 8px' }}>
							{linkPreview.description}
						</Typography>
					</Box>

					<CardMedia
						sx={{ width: '30%' }}
						component='img'
						src={linkPreview.image}
						alt='Preview'
						referrerpolicy='no-referrer'
					/>
				</Card>
			)}
		</>
	);
};

export default LinkPreview;
