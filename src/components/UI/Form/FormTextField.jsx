import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { Controller, useFormState } from 'react-hook-form';

export const StyledTextField = styled(TextField)`
	margin-top: ${({ theme }) => theme.spacing(2)};
	width: 100%;
`;

const FormTextField = ({ control, name, ...otherTextFieldProps }) => {
	const { errors } = useFormState({ control });
	const hasError = Boolean(errors[name]);
	const message = errors[name]?.message;
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<StyledTextField
					error={hasError}
					helperText={message}
					{...field}
					{...otherTextFieldProps}
				/>
			)}
		/>
	);
};

export default FormTextField;
