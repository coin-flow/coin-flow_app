import { style } from '@vanilla-extract/css';

export const container = style({
	width: '100%',
	position: 'sticky',
	top: '60px',
	backgroundColor: '#f9f9f9',
	opacity: '80%',
	zIndex: '100',
	backdropFilter: 'blur(var(--coplore-blur-sm))',
	display: 'flex',
	flexDirection: 'column'
});

export const topWrapper = style({
	height: '80px',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	borderBottom: '1px solid #e2e2e2'
});

export const buttonGroup = style({
	display: 'flex',
	gap: '8px'
});

export const input = style({
	width: '350px',
	height: '50px',
	border: '1px solid #DADAE4',
	borderRadius: '4px',
	paddingInline: '16px',
	outline: 'none'
});

export const headerList = style({
	display: 'flex',
	height: '40px',
	alignItems: 'center',
	borderBottom: '1px solid #e2e2e2'
});

export const headerItem = style({
	flex: '1',
	paddingInline: '12px',
	color: '#777777'
});
