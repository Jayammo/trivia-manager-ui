import { createContext, useContext, useState } from 'react';

const ToasterContext = createContext();

export const useToaster = () => {
	return useContext(ToasterContext);
};

export const ToasterProvider = ({ children }) => {
	const [toastProps, setToastProps] = useState({});
	const [open, setOpen] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const popToast = (severity, message, autoHideDuration = 6000) => {
		setToastProps({ severity, message, autoHideDuration });
		setOpen(true);
	};

	const value = { toastProps, open, handleClose, popToast };

	return (
		<ToasterContext.Provider value={value}>{children}</ToasterContext.Provider>
	);
};
