import './App.css';
import Layout from './components/Layout/Layout';
import { createTheme, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';

function App() {
	const theme = createTheme({
		palette: {
			mode: 'dark',
		},
		status: {
			danger: orange[500],
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Layout className='container' />
		</ThemeProvider>
	);
}

export default App;
