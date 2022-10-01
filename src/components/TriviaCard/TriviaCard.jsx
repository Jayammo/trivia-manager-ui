import React from 'react';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';

const TriviaCard = ({ trivia }) => {
	const theme = useTheme();
	return (
		<Box sx={{ width: 450, marginTop: theme.spacing(2) }}>
			<Card variant='outlined' raised={true}>
				<CardContent>
					<Typography color='text.secondary' gutterBottom>
						Trivia Event Name
					</Typography>
					<Typography color='text.secondary'>adjective</Typography>
					<Typography variant='body2'>
						Location: World of Beer
						<br />
						{'Wednesday on March 12, 2023'}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default TriviaCard;
