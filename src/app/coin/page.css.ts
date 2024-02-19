import { style } from '@vanilla-extract/css';

export const container = style({
	marginTop: '80px'
});

export const textGroup = style({
	width: '650px',
	display: 'flex',
	flexDirection: 'column',
	gap: '16px'
});

export const title = style({
	fontSize: '36px',
	color: '#2C3145'
});

export const text = style({
	fontSize: '14px',
	color: '#777777',
	lineHeight: '1.4'
});
