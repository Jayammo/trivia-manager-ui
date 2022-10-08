import { useCallback, useEffect, useState } from 'react';
import { MenuItem } from '@mui/material';
import ConfirmButtons from '../Confirmation/ConfirmButtons/ConfirmButtons';

const MenuItemWrap = ({
	confirm = false,
	children,
	onClick,
	onClose,
	...otherProps
}) => {
	const [confirmReady, setConfirmReady] = useState(false);

	const handleClick = () => {
		setConfirmReady((prev) => !prev);
	};

	const onCancel = (event) => {
		event.stopPropagation();
		setConfirmReady(false);
	};

	const confirmButtonsWrapper = (
		<>
			{children}:
			<ConfirmButtons onConfirm={onClick} onClose={onCancel} />
		</>
	);

	if (confirm) {
		return (
			<MenuItem onClick={handleClick}>
				{confirmReady ? confirmButtonsWrapper : children}
			</MenuItem>
		);
	}

	return (
		<MenuItem onClick={onClick} {...otherProps}>
			{children}
		</MenuItem>
	);
};

export default MenuItemWrap;
