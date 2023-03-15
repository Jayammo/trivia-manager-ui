import { Alert, Snackbar } from '@mui/material';
import { useToaster } from '../../../contexts/ToasterContext';

const Toaster = () => {
	const { toastProps, open, handleClose } = useToaster();

	const { autoHideDuration, message, severity } = toastProps;

	return (
		<Snackbar
			open={open}
			autoHideDuration={autoHideDuration}
			onClose={handleClose}
		>
			<Alert
				onClose={handleClose}
				severity={severity}
				variant='filled'
				sx={{ width: '100%' }}
			>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default Toaster;
