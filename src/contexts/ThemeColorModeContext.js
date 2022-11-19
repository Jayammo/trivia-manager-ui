import { createContext } from 'react';
import { ThemeProvider } from '@mui/material';
import useColorMode from '../hooks/useColorMode';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeColorModeContextProvider = ({ children }) => {
	const { theme, colorMode } = useColorMode();
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<LocalizationProvider dateAdapter={AdapterLuxon}>
				<ColorModeContext.Provider value={colorMode}>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</ColorModeContext.Provider>
			</LocalizationProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
