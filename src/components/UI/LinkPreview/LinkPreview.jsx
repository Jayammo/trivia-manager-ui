import { Card, CardContent } from '@mui/material';
import FormTextField from '../Form/FormTextField';

const LinkPreview = ({ control, name, label }) => {
	return (
		<>
			<FormTextField
				control={control}
				name={name}
				label={label}
				onBlur={(e) => console.log('Called on Blur', e)}
			/>
			<Card>
				<CardContent>{'...'}</CardContent>
			</Card>
		</>
	);
};

export default LinkPreview;
