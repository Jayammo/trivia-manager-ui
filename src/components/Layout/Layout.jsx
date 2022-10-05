import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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

const Layout = ({ children }) => {
	const theme = useTheme();
	return (
		<>
			<Router>
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
								display: 'flex',
								padding: theme.spacing(1),
							}}
						>
							{children}
						</Box>
					</Paper>
				</Container>
			</Router>
		</>
	);
};

export default Layout;
