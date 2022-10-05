import { useContext } from 'react';
import {
	Box,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../../context/ThemeColorModeContext';

const Header = () => {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);

	return (
		<Box sx={{ flexGrow: 1, minHeight: '5vh' }}>
			<AppBar position='static' enableColorOnDark>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<ArrowBackIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}
						align='center'
					>
						Triva Manager
					</Typography>
					<IconButton
						sx={{ ml: 1 }}
						onClick={colorMode.toggleColorMode}
						color='inherit'
					>
						{theme.palette.mode === 'dark' ? (
							<Brightness7Icon />
						) : (
							<Brightness4Icon />
						)}
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
