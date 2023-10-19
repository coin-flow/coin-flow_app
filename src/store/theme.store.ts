import { atom } from 'recoil';

enum THEME_ATOM_KEY {
	THEME_STATE = 'themeState'
}

export const themeState = atom<{ isDark: boolean }>({
	key: THEME_ATOM_KEY.THEME_STATE,
	default: {
		isDark: false
	}
});
