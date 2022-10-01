import { Box, Chip, IconButton } from '@mui/material';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ConfirmChips = ({ onClose, onConfirm }) => {
	return (
		<Box
			display='flex'
			sx={{
				gap: '5px',
			}}
		>
			<IconButton color='error' onClick={onClose}>
				<CancelIcon />
			</IconButton>
			<IconButton color='success' onClick={onConfirm}>
				<CheckCircleIcon />
			</IconButton>
		</Box>
	);
};

export default ConfirmChips;
