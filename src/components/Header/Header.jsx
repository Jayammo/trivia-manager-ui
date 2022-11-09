import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HeaderOptions from './HeaderOptions/HeaderOptions';
import styled from '@emotion/styled';

const StyledBox = styled(Box)`
	min-height: 5vh;
`;

const StyledTypography = styled(Typography)`
	width: 100%;
`;

const Header = () => {
	return (
		<StyledBox>
			<AppBar position='static' enableColorOnDark>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
					>
						<ArrowBackIcon />
					</IconButton>
					<StyledTypography variant='h6' component='div' align='center'>
						Trivia Manager
					</StyledTypography>
					<HeaderOptions />
				</Toolbar>
			</AppBar>
		</StyledBox>
	);
};

export default Header;
