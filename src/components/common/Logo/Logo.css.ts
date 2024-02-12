import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'flex',
	alignItems: 'center',
	gap: '8px'
});

export const text = style({
	fontSize: '24px',
	lineHeight: '2rem',
	color: 'var(--coplore-black)'
});
