import { createTheme } from '@mui/material';
import { blueGrey, indigo } from '@mui/material/colors';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: indigo,
		secondary: indigo
	}
});

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: indigo,
		secondary: indigo,
		background: {
			default: blueGrey['50']
		}
	}
});
