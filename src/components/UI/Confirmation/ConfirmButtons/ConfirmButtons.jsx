import { Box, IconButton } from '@mui/material';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ConfirmChips = ({ onClose, onConfirm }) => {
	return (
		<Box ml={0.5}>
			<IconButton color='error' onClick={onClose} size='small'>
				<CancelIcon size='small' />
			</IconButton>
			<IconButton color='success' onClick={onConfirm} size='small'>
				<CheckCircleIcon size='small' />
			</IconButton>
		</Box>
	);
};

export default ConfirmChips;
