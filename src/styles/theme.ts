import { createTheme } from '@mui/material';
import { blueGrey, deepPurple } from '@mui/material/colors';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: deepPurple,
		secondary: deepPurple
	}
});

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: deepPurple,
		secondary: deepPurple,
		background: {
			default: blueGrey['50']
		}
	}
});
