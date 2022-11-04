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
				<Layout>
					<Routes>
						<Route
							path='/'
							element={<PrivateRoute element={<div>Home</div>} />}
						/>
						<Route
							path='/trivia'
							element={<PrivateRoute element={<TriviaPage />} />}
						/>
						<Route
							path='/trivia/create'
							element={<PrivateRoute element={<CreateTriviaEventPage />} />}
						/>
						<Route
							path='/registration'
							element={<PrivateRoute element={<Registration />} />}
						/>
						<Route
							path='/teams'
							element={<PrivateRoute element={<div>Teams</div>} />}
						/>
						<Route
							path='/questions'
							element={<PrivateRoute element={<div>Question</div>} />}
						/>
						<Route path='/sign-in' element={<SignIn />} />
					</Routes>
				</Layout>
			</ThemeColorModeContextProvider>
		</AuthProvider>
	);
}

export default App;
