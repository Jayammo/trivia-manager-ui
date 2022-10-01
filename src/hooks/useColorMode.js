import { useMemo, useState } from 'react';
import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

const useColorMode = () => {
	const [mode, setMode] = useState('light');

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
				status: {
					danger: orange[500],
				},
			}),
		[mode]
	);
	return { theme, colorMode, mode };
};

export default useColorMode;
