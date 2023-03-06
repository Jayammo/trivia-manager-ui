import styled from '@emotion/styled';
import { Card, CardActions } from '@mui/material';

export const StyledCardActions = styled(CardActions)`
	display: flex;
	justify-content: flex-end;
	padding: 16px;
	& > .register {
		flex: auto;
	}
`;

export const StyledCard = styled(Card)`
	margin: auto;
	width: 500px;
`;
