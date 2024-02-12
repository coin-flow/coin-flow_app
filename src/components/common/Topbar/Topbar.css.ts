import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
	width: '100%',
	height: '40px',
	borderBottomWidth: '1px',
	borderColor: 'rgb(228 228 231)'
});

export const wrapper = style({
	width: '100%',
	maxWidth: '1440px',
	display: 'flex',
	gap: '24px',
	alignItems: 'center',
	padding: '12px',
	margin: '0 auto'
});

export const item = style({
	display: 'flex',
	gap: '4px',
	alignItems: 'center'
});

const textBase = style({
	fontSize: '12px',
	lineHeight: '16px'
});

export const textVariant = styleVariants({
	grey: [textBase, { color: 'rgb(113 113 122)' }],
	primary: [textBase, { color: 'var(--coplore-primary-500)' }]
});
