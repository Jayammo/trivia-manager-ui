import { Menu } from '@mui/material';

const MenuWrap = (props) => {
	const { children } = props;

	return (
		<Menu
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			{...props}
		>
			{children}
		</Menu>
	);
};

export default MenuWrap;
