import { FormControlLabel, FormGroup, Switch } from '@mui/material';

const ToggleSwitch = ({ checked, setChecked, label }) => {
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<FormGroup>
			<FormControlLabel
				control={
					<Switch
						checked={checked}
						onChange={handleChange}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
				}
				label={label}
			/>
		</FormGroup>
	);
};

export default ToggleSwitch;
