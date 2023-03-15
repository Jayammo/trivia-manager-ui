import { CardContent, Typography, CardHeader, Button } from '@mui/material';
import FormTextField from '../../../components/UI/Form/FormTextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegistrationYupSchema } from '../AuthYupSchema';
import { useAuth } from '../../../contexts/AuthProvider';
import { StyledCard, StyledCardActions } from '../StyledAuth';
import ToggleSwitch from '../../../components/UI/Switch/ToggleSwitch';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToaster } from '../../../contexts/ToasterContext';

const Registration = () => {
	const [showPassword, setShowPassword] = useState(false);

	const { control, handleSubmit } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
		defaultValues: { username: '', email: '', password: '' },
		resolver: yupResolver(RegistrationYupSchema),
	});

	const { signup } = useAuth();
	const navigate = useNavigate();
	const { popToast } = useToaster();

	const onSubmit = async (data) => {
		const registerModel = {
			username: data.username,
			email: data.email,
			password: data.password,
		};
		try {
			const response = await signup(registerModel);
			if (response) {
				navigate('/trivia');
			}
		} catch (error) {
			popToast('error', 'Invalid Username/Password');
		}
	};

	return (
		<StyledCard raised={true}>
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
						type={!showPassword && 'password'}
					/>
					<FormTextField
						control={control}
						name='confirmPassword'
						label='Confirm Password'
						type={!showPassword && 'password'}
					/>
					<ToggleSwitch
						checked={showPassword}
						setChecked={setShowPassword}
						label='Show Password'
					/>
				</CardContent>
				<StyledCardActions>
					<Button type='submit'>Submit</Button>
				</StyledCardActions>
			</form>
		</StyledCard>
	);
};

export default Registration;
