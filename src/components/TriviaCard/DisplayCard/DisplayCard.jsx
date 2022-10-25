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
import { MenuItemWrap, MenuWrap } from '../../UI/MenuWrap';

const DisplayCard = ({ trivia }) => {
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
						<IconButton onClick={handleClick}>
							<MoreVertIcon />
						</IconButton>
					}
					title={trivia.title}
					subheader={trivia.startTime}
				/>
				<CardContent>
					<Typography variant='body2'>
						Location Name: {trivia.locationName}
					</Typography>
					<Typography variant='body2'>Adress: {trivia.adress}</Typography>
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

export default DisplayCard;
