import React, { useState } from 'react';
import { Card, Box, CardHeader, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuItemWrap, MenuWrap } from '../../UI/MenuWrap';
import styled from '@emotion/styled';
// import { useNavigate } from 'react-router-dom';

const StyledBox = styled(Box)`
	width: 500px;
	margin: ${({ theme }) => theme.spacing(2)};
`;

const DisplayQuestionCollectionCard = ({ questionCollection }) => {
	// const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onRemove = async () => {
		setAnchorEl(null);
	};

	const onEdit = () => {
		// navigate(`/trivia/update/${id}`);
	};

	const onCopy = () => {};

	return (
		<StyledBox>
			<Card raised={true}>
				<CardHeader
					action={
						<IconButton onClick={handleClick}>
							<MoreVertIcon />
						</IconButton>
					}
					title={questionCollection.title}
					subheader={questionCollection.description}
				/>
			</Card>
			<MenuWrap anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItemWrap onClick={onEdit}>Edit</MenuItemWrap>
				<MenuItemWrap onClick={onCopy}>Copy Questions</MenuItemWrap>
				<MenuItemWrap onClick={onRemove} onClose={handleClose} confirm='true'>
					Remove
				</MenuItemWrap>
			</MenuWrap>
		</StyledBox>
	);
};

export default DisplayQuestionCollectionCard;
