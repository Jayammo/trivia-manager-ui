import { useState } from 'react';
import {
	Card,
	Box,
	TextField,
	CardContent,
	Typography,
	CardHeader,
	CardActions,
	Button,
} from '@mui/material';

const SignIn = () => {
	const [state, setState] = useState({ email: '', password: '' });
	const [password, setPassword] = useState('');

	const handleChange = ({ target }) => {
		setState((prev) => {
			return {
				...prev,
				[target.name]: target.value,
			};
		});
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
				<CardContent>
					<TextField
						required
						fullWidth
						name='email'
						label='Email'
						value={state.email}
						onChange={handleChange}
					/>
					<TextField
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						autoComplete='current-password'
						sx={{ marginTop: '15px' }}
						value={state.password}
						onChange={handleChange}
					/>
				</CardContent>
				<CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Button>Submit</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

export default SignIn;
