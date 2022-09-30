import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	const [index, setIndex] = useState(0);
	const navigate = useNavigate();

	const handleChange = (event, newValue) => {
		setIndex(newValue);
	};

	return (
		<div className='tabs'>
			<Tabs value={index} onChange={handleChange}>
				<Tab label='Home' onClick={() => navigate('/')} />
				<Tab label='Teams' onClick={() => navigate('/teams')} />
				<Tab label='Questions' onClick={() => navigate('/questions')} />
				<Tab label='Trivia Events' onClick={() => navigate('/trivia')} />
			</Tabs>
		</div>
	);
};

export default Nav;
