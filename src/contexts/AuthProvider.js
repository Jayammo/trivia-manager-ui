import { createContext, useContext, useEffect, useState } from 'react';
import { DecodeToken, Logout } from '../helper/CookieHandler';
import { loginUser, registerUser } from '../services/TriviaManager/AuthService';

const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	const signup = (registerModel) => {
		return registerUser(registerModel);
	};

	const login = ({ username, password }) => {
		return loginUser(username, password);
	};

	useEffect(() => {
		const decodeToken = DecodeToken();
		setCurrentUser({ username: decodeToken?.name });
		setLoading(false);
	}, []);

	const value = {
		currentUser,
		setCurrentUser,
		signup,
		login,
		loading,
		logout: Logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
