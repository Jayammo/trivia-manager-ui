import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

export const PrivateRoute = () => {
	const { currentUser } = useAuth();
	const location = useLocation();

	return currentUser?.username ? (
		<Outlet />
	) : (
		<Navigate to='/sign-in' state={{ from: location }} replace />
	);
};
