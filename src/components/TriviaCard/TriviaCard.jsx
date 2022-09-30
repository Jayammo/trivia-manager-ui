import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const TriviaCard = ({ trivia }) => {
	return (
		<Box sx={{ width: 275 }}>
			<Card variant='outlined' raised={true}>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
						Word of the Day
					</Typography>
					<Typography sx={{ mb: 1.5 }} color='text.secondary'>
						adjective
					</Typography>
					<Typography variant='body2'>
						well meaning and kindly.
						<br />
						{'"a benevolent smile"'}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default TriviaCard;
