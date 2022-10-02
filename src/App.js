import Layout from './components/Layout/Layout';
import { ThemeProvider } from '@mui/material';
import { ColorModeContextProvider } from './context/ColorModeContext';
import useColorMode from './hooks/useColorMode';
import { Route, Routes } from 'react-router-dom';
import TriviPage from './pages/TriviaPage/TriviaPage';
import { StoreProvider } from 'easy-peasy';
import { store } from './context/Store/store';

function App() {
	const { theme, colorMode } = useColorMode();

	return (
		<ColorModeContextProvider value={colorMode}>
			<StoreProvider store={store}>
				<ThemeProvider theme={theme}>
					<Layout>
						<Routes>
							<Route path='/' element={<TriviPage />} />
							<Route path='/teams' element={<div>Teams</div>} />
							<Route path='/questions' element={<div>Question</div>} />
						</Routes>
					</Layout>
				</ThemeProvider>
			</StoreProvider>
		</ColorModeContextProvider>
	);
}

export default App;
