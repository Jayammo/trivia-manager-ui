import { Route, Routes } from 'react-router-dom';
import { store } from './context/Store/store';
import TriviPage from './pages/TriviaPage/TriviaPage';
import Layout from './components/Layout/Layout';
import { AuthProvider } from 'react-auth-kit';
import SignIn from './pages/Authentication/SignIn/SignIn';
import { ThemeColorModeContextProvider } from './context/ThemeColorModeContext';

function App() {
	return (
		<AuthProvider
			authType={'cookie'}
			authName={'_auth'}
			cookieDomain={window.location.hostname}
			cookieSecure={window.location.protocol === 'https:'}
		>
			<ThemeColorModeContextProvider>
				<Layout>
					<Routes>
						<Route path='/' element={<TriviPage />} />
						<Route path='/sign-in' element={<SignIn />} />
						<Route path='/teams' element={<div>Teams</div>} />
						<Route path='/questions' element={<div>Question</div>} />
					</Routes>
				</Layout>
			</ThemeColorModeContextProvider>
		</AuthProvider>
	);
}

export default App;
