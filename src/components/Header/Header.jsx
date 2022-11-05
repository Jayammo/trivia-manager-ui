import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HeaderOptions from './HeaderOptions/HeaderOptions';

const Header = () => {
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
						Trivia Manager
					</Typography>
					<HeaderOptions />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
