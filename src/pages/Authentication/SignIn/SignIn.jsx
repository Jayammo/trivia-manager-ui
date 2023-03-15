import {
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
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthProvider';
import { StyledCardActions, StyledCard } from '../StyledAuth';
import { useState } from 'react';
import { useToaster } from '../../../contexts/ToasterContext';

const SignIn = () => {
	const [loading, setLoading] = useState(false);
	const { control, handleSubmit } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
		defaultValues: { username: '', password: '' },
		resolver: yupResolver(SignInYupSchema),
	});

	const navigate = useNavigate();
	const { login } = useAuth();
	const { popToast } = useToaster();

	const onSubmit = async (data) => {
		setLoading(true);

		try {
			const loginModel = { username: data.username, password: data.password };
			const response = await login(loginModel);
			if (response) {
				navigate('/trivia');
			}
		} catch (error) {
			popToast('error', 'Invalid Username/Password');
		}

		setLoading(false);
	};

	return (
		<StyledCard raised={true}>
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
					<Typography className='register' variant='subtitle1'>
						<Link to='/registration'>Click Here</Link> to Register
					</Typography>
					{loading ? (
						<CircularProgress />
					) : (
						<Button type='submit'>Submit</Button>
					)}
				</StyledCardActions>
			</form>
		</StyledCard>
	);
};

export default SignIn;
