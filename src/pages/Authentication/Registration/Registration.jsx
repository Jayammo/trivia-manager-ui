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
import { register } from '../../../services/TriviaManager/AuthService';
import { RegistrationYupSchema } from '../AuthYupSchema';

const Registration = () => {
	const { control, handleSubmit } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
		defaultValues: { username: '', email: '', password: '' },
		resolver: yupResolver(RegistrationYupSchema),
	});

	const onSubmit = (data) => {
		const registerModel = {
			username: data.username,
			email: data.email,
			password: data.password,
		};
		register(registerModel);
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
					sx={{ paddingBottom: 0 }}
					title={
						<Typography variant='h4' align='center'>
							Register
						</Typography>
					}
				/>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CardContent>
						<FormTextField control={control} name='username' label='Username' />
						<FormTextField control={control} name='email' label='Email' />
						<FormTextField
							control={control}
							name='password'
							label='Password'
							type='password'
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

export default Registration;
