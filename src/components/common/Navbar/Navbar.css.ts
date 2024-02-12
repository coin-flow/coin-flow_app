import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
	width: '100%',
	height: '60px',
	borderBottomWidth: '1px',
	borderColor: 'rgb(228 228 231)'
});

export const wrapper = style({
	width: '100%',
	maxWidth: '1440px',
	margin: '0 auto',
	padding: '12px',
	display: 'flex',
	justifyContent: 'space-between'
});

export const left = style({
	display: 'flex',
	alignItems: 'center'
});

export const menus = style({
	display: 'flex',
	alignItems: 'center',
	paddingLeft: '16px'
});

const menuBase = style({
	fontSize: '14px',
	lineHeight: '20px',
	padding: '0 16px',
	transition: '150ms',
	':hover': {
		color: 'rgb(39 39 42)'
	}
});

export const menuVariant = styleVariants({
	normal: [menuBase, { color: 'rgb(113 113 122)' }],
	active: [menuBase, { color: 'rgb(24 24 27)' }]
});

export const right = style({
	display: 'flex',
	alignItems: 'center',
	gap: '8px'
});
