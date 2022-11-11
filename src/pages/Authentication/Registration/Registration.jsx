import {
	Card,
	CardContent,
	Typography,
	CardHeader,
	Button,
} from '@mui/material';
import FormTextField from '../../../components/UI/Form/FormTextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegistrationYupSchema } from '../AuthYupSchema';
import { useAuth } from '../../../contexts/AuthProvider';
import { StyledBox, StyledCardActions } from '../StyledAuth';

const Registration = () => {
	const { control, handleSubmit } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
		defaultValues: { username: '', email: '', password: '' },
		resolver: yupResolver(RegistrationYupSchema),
	});

	const { signup } = useAuth();

	const onSubmit = (data) => {
		const registerModel = {
			username: data.username,
			email: data.email,
			password: data.password,
		};

		signup(registerModel);
	};

	return (
		<StyledBox>
			<Card raised={true}>
				<CardHeader
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
					<StyledCardActions>
						<Button type='submit'>Submit</Button>
					</StyledCardActions>
				</form>
			</Card>
		</StyledBox>
	);
};

export default Registration;
