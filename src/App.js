import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';
import TriviPage from './pages/TriviaPage/TriviaPage.jsx';
import Layout from './components/Layout/Layout.jsx';
import SignIn from './pages/Authentication/SignIn/SignIn.jsx';
import { ThemeColorModeContextProvider } from './contexts/ThemeColorModeContext.js';
import CreateTriviaEventPage from './pages/TriviaPage/CreateTriviaEvent/CreateTriviaEventPage.jsx';
import Registration from './pages/Authentication/Registration/Registration.jsx';

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
						<Route path='/' element={<div>Home</div>} />
						<Route path='/trivia' element={<TriviPage />} />
						<Route path='/trivia/create' element={<CreateTriviaEventPage />} />
						<Route path='/sign-in' element={<SignIn />} />
						<Route path='/registration' element={<Registration />} />
						<Route path='/teams' element={<div>Teams</div>} />
						<Route path='/questions' element={<div>Question</div>} />
					</Routes>
				</Layout>
			</ThemeColorModeContextProvider>
		</AuthProvider>
	);
}

export default App;
