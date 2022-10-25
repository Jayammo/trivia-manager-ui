import { createContext } from 'react';
import { ThemeProvider } from '@mui/material';
import useColorMode from '../hooks/useColorMode';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeColorModeContextProvider = ({ children }) => {
	const { theme, colorMode } = useColorMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
