import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	useTheme,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import FormTextField from '../../UI/Form/FormTextField';

const EditableCard = () => {
	const theme = useTheme();

	const { control, handleSubmit } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
		// resolver: yupResolver(SignInYupSchema),
	});

	return (
		<Box sx={{ width: 450, margin: theme.spacing(2) }}>
			<Card raised={true}>
				<CardHeader
					action={
						<Box>
							<FormTextField control={control} name='Title' label='Title' />
							<FormTextField control={control} name='Date' label='Date' />
						</Box>
					}
				/>
				<CardContent>
					<form onSubmit={handleSubmit(console.log)}>
						<CardContent>
							<FormTextField
								control={control}
								name='locationName'
								label='Location Name'
							/>
							<FormTextField
								control={control}
								name='address'
								label='Address'
								sx={{ marginTop: theme.spacing(2) }}
							/>
						</CardContent>
						<CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
							<Button type='submit'>Submit</Button>
						</CardActions>
					</form>
				</CardContent>
			</Card>
		</Box>
	);
};

export default EditableCard;
