import * as React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import {
	Container,
	CssBaseline,
	Paper,
	Divider,
	useTheme,
	Box,
} from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	const theme = useTheme();
	return (
		<>
			<Header />
			<Container maxWidth='md'>
				<Paper
					sx={{
						display: 'flex',
						flexDirection: 'column',
						minHeight: '90vh',
						overflow: 'auto',
					}}
				>
					<CssBaseline />
					<Nav />
					<Divider />
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							flexGrow: 1,
							padding: theme.spacing(1),
						}}
					>
						<Outlet />
					</Box>
				</Paper>
			</Container>
		</>
	);
};

export default Layout;

Layout.prototypes = {
	children: PropTypes.any,
};
