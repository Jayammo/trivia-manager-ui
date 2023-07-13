import styled from '@emotion/styled';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import FormTextField from '../../UI/Form/FormTextField';
import FormDatePicker from '../../UI/Form/FormDatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import LinkPreview from '../../UI/LinkPreview/LinkPreview';

export const StyledCardActions = styled(CardActions)`
	display: flex;
	justify-content: flex-end;
`;

const StyledBox = styled(Box)(({ theme }) => ({
	width: '100%',
	margin: theme.spacing(2),
	'.MuiCardHeader-root': {
		paddingBottom: 0,
	},
	'.MuiCardContent-root': {
		padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
	},
	'.marginTop': {
		marginTop: `${theme.spacing(3)}`,
	},
}));

const EditableCard = ({
	submitCallback,
	yupSchema,
	triviaEvent = {
		title: '',
		startDate: new Date(),
		duration: 0,
		locationName: '',
		location: '',
		locationLink: '',
	},
}) => {
	const { control, handleSubmit } = useForm({
		mode: 'onBlur',
		reValidateMode: 'onBlur',
		resolver: yupResolver(yupSchema),
		defaultValues: { ...triviaEvent },
	});

	return (
		<StyledBox>
			<Card raised={true}>
				<CardHeader
					title={
						<Typography variant='h5' align='center'>
							Trivia Event
						</Typography>
					}
				/>
				<CardContent>
					<form onSubmit={handleSubmit(submitCallback)}>
						<FormTextField control={control} name='title' label='Title' />
						<FormDatePicker
							control={control}
							name='startDate'
							label='Start Date'
						/>
						<FormTextField
							control={control}
							name='duration'
							label='Duration (hrs)'
							type='number'
						/>
						<FormTextField
							control={control}
							name='locationName'
							label='Location Name'
						/>
						<FormTextField control={control} name='location' label='Location' />
						<Box className='marginTop'> - OR - </Box>
						<LinkPreview
							control={control}
							name='locationLink'
							label='Location Link'
						/>
						<StyledCardActions>
							<Button type='submit'>Submit</Button>
						</StyledCardActions>
					</form>
				</CardContent>
			</Card>
		</StyledBox>
	);
};

export default EditableCard;
