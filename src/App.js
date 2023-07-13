import { Route, Routes } from 'react-router-dom';
import TriviaPage from './pages/TriviaPage/TriviaPage.jsx';
import Layout from './components/Layout/Layout.jsx';
import SignIn from './pages/Authentication/SignIn/SignIn.jsx';
import { ContextWapper } from './contexts/ContextWapper.js';
import CreateTriviaEventPage from './pages/TriviaPage/CreateTriviaEvent/CreateTriviaEventPage.jsx';
import Registration from './pages/Authentication/Registration/Registration.jsx';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';
import { AuthProvider } from './contexts/AuthProvider.js';
import UpdateTriviaEventPage from './pages/TriviaPage/UpdateTriviaEvent/UpdateTriviaEventPage.jsx';
import QuestionsPage from './pages/QuestionPage/QuestionsPage.jsx';

function App() {
	return (
		<AuthProvider>
			<ContextWapper>
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
							<Route
								path='trivia/update/:id'
								element={<UpdateTriviaEventPage />}
							/>
							<Route path='teams' element={<div>Teams</div>} />
							<Route path='questions' element={<QuestionsPage />} />
						</Route>

						{/* catch all */}
						<Route path='*' element={<div>Missing</div>} />
					</Route>
				</Routes>
			</ContextWapper>
		</AuthProvider>
	);
}

export default App;
