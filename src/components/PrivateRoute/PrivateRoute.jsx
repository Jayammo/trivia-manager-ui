import { RequireAuth } from 'react-auth-kit';

export const PrivateRoute = ({ element }) => {
	return <RequireAuth loginPath={'/sign-in'}>{element}</RequireAuth>;
};
