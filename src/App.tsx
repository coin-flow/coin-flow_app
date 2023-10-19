import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material';
import { IconButton, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import reactLogo from './assets/react.svg';
import useThemeMode from './hooks/useThemeMode';
import { themeState } from './store';
import { GlobalStyle, darkTheme, lightTheme } from './styles';
import viteLogo from '/vite.svg';

const App = () => {
	const theme = useRecoilValue(themeState);
	const { handleToggleTheme } = useThemeMode();

	const [count, setCount] = useState(0);

	return (
		<ThemeProvider theme={theme.isDark ? darkTheme : lightTheme}>
			<GlobalStyle />
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<IconButton size="large" color="inherit" onClick={handleToggleTheme}>
					{theme.isDark ? <LightModeIcon /> : <DarkModeIcon />}
				</IconButton>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</ThemeProvider>
	);
};

export default App;
