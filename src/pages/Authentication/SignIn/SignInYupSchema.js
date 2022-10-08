import * as yup from 'yup';

export const SignInYupSchema = yup.object().shape({
	email: yup
		.string()
		.required('Email is required!')
		.email('Need a valid email'),
	password: yup.string().required('Password is required!'),
});
