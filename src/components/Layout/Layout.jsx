import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Layout = () => {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path='/' element={<div>Home</div>} />
				<Route path='/teams' element={<div>Teams</div>} />
				<Route path='/questions' element={<div>Question</div>} />
				<Route path='/trivia' element={<div>Trivia</div>} />
			</Routes>
		</Router>
	);
};

export default Layout;
