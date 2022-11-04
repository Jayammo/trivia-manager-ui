import { createContext, useState } from 'react';
import { DecodeToken } from '../helper/CookieHandler';

const authState = {
	userName: '',
	roles: [],
	expiresIn: 3,
	isActive: false,
};

export const AuthContext = createContext(authState);
export const AuthProvider = ({ children }) => {
	const [authState, setAuthState] = useState(DecodeToken());

	return (
		<AuthContext.Provider value={{ authState, setAuthState }}>
			{children}
		</AuthContext.Provider>
	);
};
