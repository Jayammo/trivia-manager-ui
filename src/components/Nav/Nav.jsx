import React, { useState } from 'react';
import { Box, Tabs } from '@mui/material';
import { LinkTab } from '../UI/LinkTab/LinkTab';

const Nav = () => {
	const [index, setIndex] = useState(0);

	const handleChange = (event, newValue) => {
		setIndex(newValue);
	};

	return (
		<Box display='flex' justifyContent='center'>
			<Tabs value={index} onChange={handleChange}>
				<LinkTab label='Home' to='/trivia' />
				<LinkTab label='Teams' to='/teams' />
				<LinkTab label='Questions' to='/questions' />
			</Tabs>
		</Box>
	);
};

export default Nav;
