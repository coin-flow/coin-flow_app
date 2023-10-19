import { LOCAL_STORAGE_KEY, THEME_MODE } from '../constants';

/** 다크테마 사용유무를 통해 테마를 저장하는 함수 */
export const saveTheme = (isDark: boolean) => {
	if (isDark) {
		localStorage.setItem(LOCAL_STORAGE_KEY.THEME, THEME_MODE.DARK);
		document.body.classList.add(THEME_MODE.DARK);
	} else {
		localStorage.setItem(LOCAL_STORAGE_KEY.THEME, THEME_MODE.LIGHT);
		document.body.classList.remove(THEME_MODE.DARK);
	}
};
