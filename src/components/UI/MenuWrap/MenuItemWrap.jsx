import { useEffect, useState } from 'react';
import { MenuItem } from '@mui/material';
import ConfirmChips from '../Confrimation/ConfrimChips/ConfirmChips';

const MenuItemWrap = (props) => {
	const { confirm = false, children, onClick } = props;
	const [menuItemText, setMenuItemText] = useState(children);

	const handleClick = () => {
		if (confirm) {
			setMenuItemText(
				<>
					{children}:
					<ConfirmChips onConfirm={onClick} onClose={onClose} />
				</>
			);
		}
	};

	const onClose = () => {
		onClick();
	};

	if (confirm) return <MenuItem onClick={handleClick}>{menuItemText}</MenuItem>;

	return <MenuItem {...props}></MenuItem>;
};

export default MenuItemWrap;
