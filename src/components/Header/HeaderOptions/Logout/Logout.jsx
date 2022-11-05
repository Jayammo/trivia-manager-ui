import LogoutIcon from '@mui/icons-material/Logout';
import { ListItemIcon, ListItemText } from '@mui/material';
import { MenuItemWrap } from '../../../UI/MenuWrap';

const Logout = () => {
	const handleLogout = () => {
		console.log('logout out');
	};

	return (
		<MenuItemWrap onClick={handleLogout}>
			<ListItemText style={{ marginRight: '15px' }}>Logout</ListItemText>
			<ListItemIcon style={{ paddingLeft: '4px' }}>
				<LogoutIcon fontSize='small' />
			</ListItemIcon>
		</MenuItemWrap>
	);
};

export default Logout;
