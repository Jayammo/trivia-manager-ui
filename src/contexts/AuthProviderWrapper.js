import { AuthProvider } from 'react-auth-kit';

export const AuthProviderWrapper = ({ children }) => {
	return (
		<AuthProvider
			authType={'cookie'}
			authName={'_auth'}
			cookieDomain={window.location.hostname}
			cookieSecure={false}
		>
			{children}
		</AuthProvider>
	);
};
