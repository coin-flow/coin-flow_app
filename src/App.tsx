import { ThemeProvider } from '@mui/material';
import { useRecoilValue } from 'recoil';

import { RootRouter } from './router';
import { themeState } from './store';
import { GlobalStyle, darkTheme, lightTheme } from './styles';

const App = () => {
	const theme = useRecoilValue(themeState);

	return (
		<ThemeProvider theme={theme.isDark ? darkTheme : lightTheme}>
			<GlobalStyle />
			<RootRouter />
		</ThemeProvider>
	);
};

export default App;
