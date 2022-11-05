import { IconButton } from '@mui/material';
import { MenuWrap } from '../../UI/MenuWrap';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import Logout from './Logout/Logout';
import ThemeToggle from './ThemeToggle/ThemeToggle';

const HeaderOptions = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<IconButton color='inherit' onClick={handleClick}>
				<MoreVertIcon />
			</IconButton>
			<MenuWrap anchorEl={anchorEl} open={open} onClose={handleClose}>
				<ThemeToggle />
				<Logout />
			</MenuWrap>
		</>
	);
};

export default HeaderOptions;
