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
import { useNavigate } from 'react-router-dom';
import { removeTriviaEvent } from '../../../services/TriviaManager/TriviaEventService';

const StyledBox = styled(Box)`
	width: 450;
	margin: ${({ theme }) => theme.spacing(2)};
`;

const DisplayCard = ({ trivia }) => {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onRemove = async () => {
		const { id } = trivia;
		await removeTriviaEvent(id);
		setAnchorEl(null);
	};

	const onEdit = () => {
		const { id } = trivia;
		navigate(`/trivia/update/${id}`);
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
					subheader={trivia.startDate}
				/>
				<CardContent>
					<Typography variant='body2'>
						Location Name: {trivia.locationName}
					</Typography>
					<Typography variant='body2'>Location: {trivia.location}</Typography>
				</CardContent>
			</Card>
			<MenuWrap anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItemWrap onClick={onEdit}>Edit</MenuItemWrap>
				<MenuItemWrap onClick={onRemove} onClose={handleClose} confirm='true'>
					Remove
				</MenuItemWrap>
			</MenuWrap>
		</StyledBox>
	);
};

export default DisplayCard;
