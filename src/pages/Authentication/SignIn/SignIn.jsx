import {
	Card,
	CardContent,
	Typography,
	CardHeader,
	Button,
	CircularProgress,
} from '@mui/material';
import FormTextField from '../../../components/UI/Form/FormTextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInYupSchema } from '../AuthYupSchema';
import { useNavigate } from 'react-router-dom';
import { SetToken } from '../../../helper/CookieHandler';
import { useAuth } from '../../../contexts/AuthProvider';
import { StyledBox, StyledCardActions } from '../StyledAuth';
import { useState } from 'react';

const SignIn = () => {
	const [loading, setLoading] = useState(false);
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
		setLoading(true);
		try {
			const response = await login(loginModel);
			if (response?.token) {
				setCurrentUser({ username: loginModel.username });
				SetToken(response.token);
				navigate('/trivia');
			}
		} catch (err) {
			console.error('Error Here =>', err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<StyledBox>
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
						<FormTextField control={control} name='username' label='Username' />

						<FormTextField
							control={control}
							name='password'
							label='Password'
							type='password'
						/>
					</CardContent>
					<StyledCardActions>
						{loading ? (
							<CircularProgress />
						) : (
							<Button type='submit'>Submit</Button>
						)}
					</StyledCardActions>
				</form>
			</Card>
		</StyledBox>
	);
};

export default SignIn;
