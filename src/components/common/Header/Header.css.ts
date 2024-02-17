import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	position: 'sticky',
	top: '-40px',
	backdropFilter: 'blur(var(--coplore-blur-sm))',
	backgroundColor: 'var(--coplore-white-opacity-60)',
	zIndex: '100'
});
