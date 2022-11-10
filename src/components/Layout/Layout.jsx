import * as React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import { Container, CssBaseline, Paper, Divider, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { useAuth } from '../../contexts/AuthProvider';

const StyledPaper = styled(Paper)`
	display: flex;
	flex-direction: column;
	min-height: 90vh;
	overflow: auto;
`;

const StyledBox = styled(Box)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding: ${({ theme }) => theme.spacing(1)};
`;

const Layout = () => {
	const { loading } = useAuth();
	return (
		<>
			<Header />
			<Container maxWidth='md'>
				<StyledPaper>
					<CssBaseline />
					<Nav />
					<Divider />
					<StyledBox>{loading ? 'loading...' : <Outlet />}</StyledBox>
				</StyledPaper>
			</Container>
		</>
	);
};

export default Layout;

Layout.prototypes = {
	children: PropTypes.any,
};
