import styled from '@emotion/styled';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import FormTextField from '../../UI/Form/FormTextField';

export const StyledCardActions = styled(CardActions)`
	display: flex;
	justify-content: flex-end;
`;

const StyledBox = styled(Box)`
	width: 100%;
	margin: ${({ theme }) => theme.spacing(2)};
`;

const EditableCard = () => {
	const { control, handleSubmit } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	return (
		<StyledBox>
			<Card raised={true}>
				<CardHeader
					action={
						<Box>
							<FormTextField control={control} name='Title' label='Title' />
							<FormTextField control={control} name='Date' label='Date' />
						</Box>
					}
				/>
				<CardContent>
					<form onSubmit={handleSubmit(console.log)}>
						<CardContent>
							<FormTextField
								control={control}
								name='locationName'
								label='Location Name'
							/>
							<FormTextField control={control} name='address' label='Address' />
						</CardContent>
						<StyledCardActions>
							<Button type='submit'>Submit</Button>
						</StyledCardActions>
					</form>
				</CardContent>
			</Card>
		</StyledBox>
	);
};

export default EditableCard;
