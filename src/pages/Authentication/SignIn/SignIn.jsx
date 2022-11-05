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
import { SignInYupSchema } from '../AuthYupSchema';
import { useNavigate } from 'react-router-dom';
import { SetCookie } from '../../../helper/CookieHandler';
import { useAuth } from '../../../contexts/AuthProvider';

const SignIn = () => {
	const { control, handleSubmit } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
		defaultValues: { username: '', password: '' },
		resolver: yupResolver(SignInYupSchema),
	});
	const navigate = useNavigate();
	const { login, setCurrentUser } = useAuth();

	const onSubmit = async (data) => {
		const loginModel = { username: data.username, password: data.password };
		try {
			const tokenString = await login(loginModel);
			const response = JSON.parse(tokenString);

			if (response?.token) {
				setCurrentUser({ username: loginModel.username });
				SetCookie(response.token);
				navigate('/trivia');
			}
		} catch (err) {
			console.error('Error Here =>', err);
		}
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
							Sign In
						</Typography>
					}
				/>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CardContent>
						<FormTextField control={control} name='username' label='Username' />

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

export default SignIn;
