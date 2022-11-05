import { createContext, useContext, useState } from 'react';
import { loginUser, registerUser } from '../services/TriviaManager/AuthService';

const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();

	const signup = (username, email, password) => {
		return registerUser(username, email, password);
	};

	const login = (email, password) => {
		return loginUser(email, password);
	};

	const value = {
		currentUser,
		setCurrentUser,
		signup,
		login,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
