import {
	Box,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1, minHeight: '5vh' }}>
			<AppBar position='static'>
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
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
