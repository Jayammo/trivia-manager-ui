import React, { useState } from 'react';
import {
	Card,
	CardContent,
	Typography,
	Box,
	useTheme,
	CardHeader,
	IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuItemWrap, MenuWrap } from '../UI/MenuWrap';

const TriviaCard = ({ trivia }) => {
	const theme = useTheme();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onRemove = () => {
		console.log('trivia =>', trivia);
		setAnchorEl(null);
	};

	return (
		<Box sx={{ width: 450, margin: theme.spacing(2) }}>
			<Card raised={true}>
				<CardHeader
					action={
						<IconButton aria-label='settings' onClick={handleClick}>
							<MoreVertIcon />
						</IconButton>
					}
					title={trivia.title}
					subheader='Wednesday on March 12, 2023'
				/>
				<CardContent>
					<Typography variant='body2'>Location: {trivia.location}</Typography>
				</CardContent>
			</Card>
			<MenuWrap anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItemWrap onClick={handleClose}>Edit</MenuItemWrap>
				<MenuItemWrap onClick={onRemove} onClose={handleClose} confirm='true'>
					Remove
				</MenuItemWrap>
			</MenuWrap>
		</Box>
	);
};

export default TriviaCard;
