import React, { useState } from 'react';
import {
	Card,
	CardContent,
	Typography,
	Box,
	CardHeader,
	IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuItemWrap, MenuWrap } from '../../UI/MenuWrap';
import styled from '@emotion/styled';

const StyledBox = styled(Box)`
	width: 450;
	margin: ${({ theme }) => theme.spacing(2)};
`;

const DisplayCard = ({ trivia }) => {
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
		<StyledBox>
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
		</StyledBox>
	);
};

export default DisplayCard;
