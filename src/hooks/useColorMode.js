import { useEffect, useMemo, useState } from 'react';
import { createTheme } from '@mui/material';

const useColorMode = () => {
	const [mode, setMode] = useState('light');

	const colorMode = useMemo(() => ({
		toggleColorMode: () => {
			setMode((prevMode) => {
				const currentMode = prevMode === 'light' ? 'dark' : 'light';
				localStorage.setItem('TriviaMangerTheme', currentMode);
				return currentMode;
			});
		},
	}));

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	useEffect(() => {
		setMode(localStorage.getItem('TriviaMangerTheme') || 'light');
	}, [setMode]);

	return { theme, colorMode };
};

export default useColorMode;
