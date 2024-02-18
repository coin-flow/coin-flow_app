import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	position: 'sticky',
	top: '-40px',
	backgroundColor: 'var(--coplore-white)',
	zIndex: '100'
});
