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
}));

const EditableCard = () => {
	const { control, handleSubmit } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
		defaultValues: {
			title: '',
			date: new Date(),
			duration: 0,
			locationName: '',
			location: '',
		},
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
					<form onSubmit={handleSubmit(console.log)}>
						<FormTextField control={control} name='title' label='Title' />
						<FormDatePicker control={control} name='date' label='Date' />
						<FormTextField
							control={control}
							name='duration'
							label='Duration'
							type='number'
						/>
						<FormTextField
							control={control}
							name='locationName'
							label='Location Name'
						/>
						<FormTextField control={control} name='location' label='Location' />
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
