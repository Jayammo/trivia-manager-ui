import {
	Card,
	Box,
	CardContent,
	Typography,
	CardHeader,
	CardActions,
	Button,
} from '@mui/material';
import FormTextField from '../../../components/UI/Form/FormTextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInYupSchema } from './SignInYupSchema';

const SignIn = () => {
	const { control, handleSubmit } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
		resolver: yupResolver(SignInYupSchema),
	});

	const onSubmit = (data, event) => {
		console.log('On Submit =>', { data, event });
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<Card raised={true}>
				<CardHeader
					title={
						<Typography variant='h4' align='center'>
							Sign In
						</Typography>
					}
				/>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CardContent>
						<FormTextField control={control} name='email' label='Email' />

						<FormTextField
							control={control}
							name='password'
							label='Password'
							type='password'
							sx={{ marginTop: '15px' }}
						/>
					</CardContent>
					<CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
						<Button type='submit'>Submit</Button>
					</CardActions>
				</form>
			</Card>
		</Box>
	);
};

export default SignIn;
