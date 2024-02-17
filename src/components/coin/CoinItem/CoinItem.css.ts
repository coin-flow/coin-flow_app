import { style } from '@vanilla-extract/css';

export const container = style({
	height: '50px',
	cursor: 'pointer',
	backgroundColor: 'inherit',
	transition: 'all 120ms ease-out',
	':hover': {
		backgroundColor: '#eeeeee'
	}
});

export const item = style({
	height: 'inherit',
	margin: 'auto 0',
	verticalAlign: 'middle',
	paddingInline: '12px',
	color: '#555766'
});

export const coinNameItem = style({
	display: 'flex',
	alignItems: 'center',
	gap: '8px'
});

export const icon = style({
	width: '30px',
	height: '30px'
});

export const badge = style({
	padding: '4px 12px',
	borderRadius: '4px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#E9EAEF',
	color: 'var(--coplore-primary-500)'
});
