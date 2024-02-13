import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '20px',
	padding: '12px',
	marginTop: '60px'
});

export const wrapper = style({
	width: '800px',
	display: 'flex',
	flexDirection: 'column',
	gap: '8px'
});

export const inner = style({
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	width: '100%',
	backgroundColor: 'rgb(226 232 240)',
	borderRadius: '8px',
	padding: '12px'
});

export const input = style({
	width: '48px',
	padding: 0,
	margin: 0,
	color: 'inherit',
	fontSize: '16px'
});

export const buttonGroup = style({
	width: '800px',
	display: 'flex',
	alignItems: 'center',
	gap: '12px'
});

export const responseBox = style({
	width: '800px',
	height: '250px',
	overflow: 'scroll'
});
