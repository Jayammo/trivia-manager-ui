import { useContext } from 'react';
// import { RequireAuth } from 'react-auth-kit';
import { AuthContext } from '../../contexts/AuthProvider';

export const PrivateRoute = ({ element }) => {
	const authState = useContext(AuthContext);
	console.log('AuthState =>', authState);
	return (
		<div
		// loginPath={'/sign-in'}
		>
			{element}
		</div>
	);
};
