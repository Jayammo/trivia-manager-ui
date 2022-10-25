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
					fullWidth
					error={hasError}
					helperText={message}
					sx={{ marginTop: 2 }}
					{...field}
					{...otherTextFieldProps}
				/>
			)}
		/>
	);
};

export default FormTextField;
