import { useState } from 'react';
import { MenuItem } from '@mui/material';
import ConfirmButtons from '../Confirmation/ConfirmButtons/ConfirmButtons';

const MenuItemWrap = (props) => {
	const { confirm = false, children, onClick, onClose } = props;
	const [menuItemText, setMenuItemText] = useState(children);

	const handleClick = () => {
		if (confirm) {
			setMenuItemText(
				<>
					{children}:
					<ConfirmButtons onConfirm={onClick} onClose={onCancel} />
				</>
			);
		}
	};

	const onCancel = () => {
		onClose();
	};

	if (confirm) return <MenuItem onClick={handleClick}>{menuItemText}</MenuItem>;

	return <MenuItem {...props}></MenuItem>;
};

export default MenuItemWrap;
