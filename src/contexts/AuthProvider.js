import { createContext, useContext, useEffect, useState } from 'react';
import { DecodeToken, Logout, SetToken } from '../helper/CookieHandler';
import { loginUser, registerUser } from '../services/TriviaManager/AuthService';

const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	const signup = async (registerModel) => {
		const response = await registerUser(registerModel);
		return await login(response.login);
	};

	const login = async (loginModel) => {
		const response = await loginUser(loginModel);
		const { token } = response;

		if (!token) {
			return;
		}
		setCurrentUser({ username: loginModel.username });
		SetToken(token);
		return token;
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
