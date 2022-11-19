import { DateTimePicker } from '@mui/x-date-pickers';
import { Controller, useFormState, useWatch } from 'react-hook-form';
import { StyledTextField } from './FormTextField';

const FormDatePicker = ({ control, name, label, ...otherProp }) => {
	const { errors } = useFormState({ control });
	const dateValue = useWatch({ control, name });

	const hasError = Boolean(errors[name]);
	const message = errors[name]?.message;
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, ...restField } }) => (
				<DateTimePicker
					label={label}
					value={dateValue}
					mask='MM/DD/YYYY hh:mm'
					minutesStep={5}
					onChange={(newDateValue) => {
						onChange(new Date(newDateValue));
					}}
					renderInput={(params) => (
						<StyledTextField
							{...params}
							variant='filled'
							error={hasError}
							name={name}
							helperText={message}
						/>
					)}
					{...restField}
					{...otherProp}
				/>
			)}
		/>
	);
};

export default FormDatePicker;

{
	/* <StyledTextField
					label='Date&Time picker'
					error={hasError}
					helperText={message}
					{...field}
					{...otherTextFieldProps}
				/> */
}
