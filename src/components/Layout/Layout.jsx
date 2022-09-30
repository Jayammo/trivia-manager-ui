import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import { Container, CssBaseline, Paper } from '@mui/material';
import TriviPage from '../../pages/TriviaPage/TriviaPage';

const Layout = () => {
	return (
		<>
			<Router>
				<Header />
				<Container maxWidth='md'>
					<Paper sx={{ minHeight: '90vh' }}>
						<CssBaseline />
						<Nav />
						<Routes>
							<Route path='/' element={<TriviPage />} />
							<Route path='/teams' element={<div>Teams</div>} />
							<Route path='/questions' element={<div>Question</div>} />
							<Route path='/trivia' element={<div>Trivia</div>} />
						</Routes>
					</Paper>
				</Container>
			</Router>
		</>
	);
};

export default Layout;
