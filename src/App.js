import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { StoreProvider } from 'easy-peasy';
import { ColorModeContextProvider } from './context/ColorModeContext';
import { store } from './context/Store/store';
import useColorMode from './hooks/useColorMode';
import TriviPage from './pages/TriviaPage/TriviaPage';
import Layout from './components/Layout/Layout';
import { AuthProvider } from 'react-auth-kit';
import SignIn from './pages/Authentication/SignIn/SignIn';

function App() {
	const { theme, colorMode } = useColorMode();

	return (
		<ColorModeContextProvider value={colorMode}>
			<AuthProvider
				authType={'cookie'}
				authName={'_auth'}
				cookieDomain={window.location.hostname}
				cookieSecure={window.location.protocol === 'https:'}
			>
				<StoreProvider store={store}>
					<ThemeProvider theme={theme}>
						<Layout>
							<Routes>
								<Route path='/' element={<TriviPage />} />
								<Route path='/sign-in' element={<SignIn />} />
								<Route path='/teams' element={<div>Teams</div>} />
								<Route path='/questions' element={<div>Question</div>} />
							</Routes>
						</Layout>
					</ThemeProvider>
				</StoreProvider>
			</AuthProvider>
		</ColorModeContextProvider>
	);
}

export default App;
