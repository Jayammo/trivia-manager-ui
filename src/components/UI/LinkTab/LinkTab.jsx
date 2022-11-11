import { Tab } from '@mui/material';
import { Link } from 'react-router-dom';

export const LinkTab = (props) => {
	return <Tab component={Link} {...props} />;
};
