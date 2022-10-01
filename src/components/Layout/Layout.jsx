import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import { Container, CssBaseline, Paper } from '@mui/material';

const Layout = ({ children }) => {
	return (
		<>
			<Router>
				<Header />
				<Container maxWidth='md'>
					<Paper sx={{ minHeight: '90vh', overflow: 'auto' }}>
						<CssBaseline />
						<Nav />
						{children}
					</Paper>
				</Container>
			</Router>
		</>
	);
};

export default Layout;
