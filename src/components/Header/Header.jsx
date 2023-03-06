import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HeaderOptions from './HeaderOptions/HeaderOptions';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

const StyledBox = styled(Box)`
	min-height: 5vh;
`;

const StyledTypography = styled(Typography)`
	width: 100%;
`;

const Header = () => {
	const navigate = useNavigate();
	const { key } = useLocation();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<StyledBox>
			<AppBar position='static' enableColorOnDark>
				<Toolbar>
					{key !== 'default' && (
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							onClick={goBack}
						>
							<ArrowBackIcon />
						</IconButton>
					)}
					<StyledTypography variant='h6' align='center'>
						Trivia Manager
					</StyledTypography>
					<HeaderOptions />
				</Toolbar>
			</AppBar>
		</StyledBox>
	);
};

export default Header;
