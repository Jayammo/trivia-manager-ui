import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
	const [index, setIndex] = useState(0);
	const navigate = useNavigate();

	const handleChange = (event, newValue) => {
		setIndex(newValue);
	};

	return (
		<Tabs value={index} onChange={handleChange} aria-label='basic tabs example'>
			<Tab label='Home' onClick={() => navigate('/')} />
			<Tab label='Teams' onClick={() => navigate('/teams')} />
			<Tab label='Questions' onClick={() => navigate('/questions')} />
			<Tab label='Trivia Events' onClick={() => navigate('/trivia')} />
		</Tabs>
	);
};

export default Nav;
