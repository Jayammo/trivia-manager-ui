import Layout from './components/Layout/Layout';
import { ThemeProvider } from '@mui/material';
import { ColorModeContextProvider } from './context/ColorModeContext';
import useColorMode from './hooks/useColorMode';

function App() {
	const { theme, colorMode } = useColorMode();

	return (
		<ColorModeContextProvider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Layout />
			</ThemeProvider>
		</ColorModeContextProvider>
	);
}

export default App;
