import { ListItemIcon, ListItemText, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../../../../contexts/ThemeColorModeContext';
import { useContext } from 'react';
import { MenuItemWrap } from '../../../UI/MenuWrap';

const ThemeToggle = () => {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);

	return (
		<MenuItemWrap onClick={colorMode.toggleColorMode} color='inherit'>
			<ListItemText>Theme</ListItemText>
			<ListItemIcon>
				{theme.palette.mode === 'dark' ? (
					<Brightness7Icon />
				) : (
					<Brightness4Icon />
				)}
			</ListItemIcon>
		</MenuItemWrap>
	);
};

export default ThemeToggle;
