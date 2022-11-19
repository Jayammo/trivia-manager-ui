import { createContext } from 'react';
import { ThemeProvider } from '@mui/material';
import useColorMode from '../hooks/useColorMode';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeColorModeContextProvider = ({ children }) => {
	const { theme, colorMode } = useColorMode();

	return (
		<LocalizationProvider dateAdapter={AdapterLuxon}>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</ColorModeContext.Provider>
		</LocalizationProvider>
	);
};
