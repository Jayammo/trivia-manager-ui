import { Controller, useFormState } from 'react-hook-form';
import { StyledTextField } from './FormTextField';

const FormDatePicker = ({ control, name, ...otherTextFieldProps }) => {
	const { errors } = useFormState({ control });
	const hasError = Boolean(errors[name]);
	const message = errors[name]?.message;
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<StyledTextField
					label='Date&Time picker'
					error={hasError}
					helperText={message}
					{...field}
					{...otherTextFieldProps}
				/>
			)}
		/>
	);
};

export default FormDatePicker;
