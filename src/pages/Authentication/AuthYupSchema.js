import * as yup from 'yup';

export const SignInYupSchema = yup.object().shape({
	username: yup.string().required('Username is required!'),
	password: yup.string().required('Password is required!'),
});

export const RegistrationYupSchema = yup
	.object()
	.shape({
		email: yup
			.string()
			.required('Email is required!')
			.email('Need a valid email'),
	})
	.concat(SignInYupSchema);
