import { TextField } from '@mui/material';
import { Controller, useFormState } from 'react-hook-form';

const FormTextField = ({ control, name, ...otherTextFieldProps }) => {
	const { errors } = useFormState({ control });
	const hasError = Boolean(errors[name]);
	const message = errors[name]?.message;
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					fullWidth
					{...otherTextFieldProps}
					error={hasError}
					helperText={message}
				/>
			)}
		/>
	);
};

export default FormTextField;
