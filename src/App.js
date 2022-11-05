import { Route, Routes } from 'react-router-dom';
import TriviaPage from './pages/TriviaPage/TriviaPage.jsx';
import Layout from './components/Layout/Layout.jsx';
import SignIn from './pages/Authentication/SignIn/SignIn.jsx';
import { ThemeColorModeContextProvider } from './contexts/ThemeColorModeContext.js';
import CreateTriviaEventPage from './pages/TriviaPage/CreateTriviaEvent/CreateTriviaEventPage.jsx';
import Registration from './pages/Authentication/Registration/Registration.jsx';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';
import { AuthProvider } from './contexts/AuthProvider.js';

function App() {
	return (
		<AuthProvider>
			<ThemeColorModeContextProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						{/* public routes */}
						<Route path='sign-in' element={<SignIn />} />
						<Route path='registration' element={<Registration />} />
						<Route path='/' element={<div>Home</div>} />

						{/* protected routes */}
						<Route element={<PrivateRoute />}>
							<Route path='trivia' element={<TriviaPage />} />
							<Route path='trivia/create' element={<CreateTriviaEventPage />} />
							<Route path='teams' element={<div>Teams</div>} />
							<Route path='questions' element={<div>Question</div>} />
						</Route>

						{/* catch all */}
						<Route path='*' element={<div>Missing</div>} />
					</Route>
				</Routes>
			</ThemeColorModeContextProvider>
		</AuthProvider>
	);
}

export default App;
