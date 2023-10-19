import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { THEME_MODE } from '../constants';
import { themeState } from '../store';
import { saveTheme } from '../utils';

const useThemeMode = () => {
	const setTheme = useSetRecoilState(themeState);
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	useEffect(() => {
		const osTheme = prefersDarkMode ? THEME_MODE.DARK : THEME_MODE.LIGHT;
		const userTheme = localStorage.getItem('theme') as THEME_MODE;
		const theme = userTheme || osTheme;

		if (theme === THEME_MODE.DARK) {
			document.body.classList.add(THEME_MODE.DARK);
			setTheme({ isDark: true });
		} else {
			document.body.classList.remove(THEME_MODE.DARK);
			setTheme({ isDark: false });
		}
	}, [prefersDarkMode, setTheme]);

	const handleToggleTheme = () => {
		setTheme(prev => {
			saveTheme(!prev.isDark);
			return { ...prev, isDark: !prev.isDark };
		});
	};

	return {
		handleToggleTheme
	};
};

export default useThemeMode;
