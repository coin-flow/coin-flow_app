import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

const root = createGlobalTheme(':root', {
	radii: {
		none: '0',
		xs: '0.125rem',
		sm: '0.25rem',
		md: '0.375rem',
		lg: '0.5rem',
		xl: '0.75rem',
		full: '9999px'
	},
	shadows: {
		none: 'none',
		xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
	},
	spacings: {
		0: '0', // 0px
		25: '0.125rem', // 2px
		50: '0.25rem', // 4px
		75: '0.375rem', // 6px
		100: '0.5rem', // 8px
		150: '0.75rem', // 12px
		200: '1rem', // 16px
		250: '1.25rem', // 20px
		300: '1.5rem', // 24px
		400: '2rem', // 32px
		500: '2.5rem', // 40px
		600: '3rem', // 48px
		800: '4rem', // 64px
		1000: '5rem' // 80px
	},
	fontSizes: {
		50: '11px',
		75: '12px',
		100: '14px',
		200: '16px',
		300: '18px',
		400: '20px',
		500: '22px',
		600: '25px',
		700: '28px',
		800: '32px',
		900: '36px',
		1000: '40px',
		1100: '45px',
		1200: '50px',
		1300: '60px'
	},
	fontWeights: {
		hairline: '100',
		thin: '200',
		light: '300',
		normal: '400',
		medium: '500',
		semibold: '600',
		bold: '700',
		extrabold: '800',
		black: '900'
	},
	letterSpacings: {
		tighter: '-0.05em',
		tight: '-0.025em',
		normal: '0',
		wide: '0.025em',
		wider: '0.05em',
		widest: '0.1em'
	},
	lineHeights: {
		1: '0.25rem',
		2: '0.5rem',
		3: '0.75rem',
		4: '1rem',
		5: '1.25rem',
		6: '1.5rem',
		7: '1.75rem',
		8: '2rem',
		9: '2.25rem',
		10: '2.5rem',
		normal: 'normal',
		none: '1',
		shorter: '1.25',
		short: '1.375',
		base: '1.5',
		tall: '1.625',
		taller: '2'
	},
	fontFamilies: {
		notoSans:
			"'Noto Sans KR', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
		pretendard:
			"'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif"
	},
	zIndeices: {
		hide: '-1',
		auto: 'auto',
		base: '0',
		docked: '10',
		dropdown: '1000',
		sticky: '1100',
		banner: '1200',
		overlay: '1300',
		modal: '1400',
		popover: '1500',
		toast: '1700',
		tooltip: '1800'
	}
});

const colors = createThemeContract({
	primary: null,
	secondary: null,
	background: null,
	text: {
		normal: null,
		dimmed: null
	}
});

export const lightTheme = createTheme(colors, {
	primary: '#1E40AF',
	secondary: '#DB2777',
	background: '#EFF6FF',
	text: {
		normal: '#1F2937',
		dimmed: '#6B7280'
	}
});

export const darkTheme = createTheme(colors, {
	primary: '#60A5FA',
	secondary: '#F472B6',
	background: '#1F2937',
	text: {
		normal: '#F9FAFB',
		dimmed: '#D1D5DB'
	}
});

export const vars = {
	...root,
	colors
};
