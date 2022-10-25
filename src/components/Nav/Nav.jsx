import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
	const [index, setIndex] = useState(0);
	const navigate = useNavigate();

	const handleChange = (event, newValue) => {
		setIndex(newValue);
	};

	return (
		<Box display='flex' justifyContent='center'>
			<Tabs value={index} onChange={handleChange}>
				<Tab label='Home' onClick={() => navigate('/trivia')} />
				<Tab label='Teams' onClick={() => navigate('/teams')} />
				<Tab label='Questions' onClick={() => navigate('/questions')} />
			</Tabs>
		</Box>
	);
};

export default Nav;
