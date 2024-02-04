'use client';

import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';

type ButtonProps = ComponentPropsWithRef<'button'> & {
	color?: 'default' | 'ghost' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
	endIcon?: ReactNode;
	fullWidth?: boolean;
	loading?: boolean;
	shape?: 'circle' | 'square';
	size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
	startIcon?: ReactNode;
	variant?: 'link' | 'outline';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		children,
		className: classNameProps,
		color = 'default',
		endIcon,
		fullWidth = false,
		loading = false,
		shape,
		size = 'md',
		startIcon,
		variant,
		...rest
	} = props;

	return (
		<button {...rest} ref={ref} className={`btn btn-${color} ${fullWidth && 'w-full'}`}>
			{startIcon && startIcon}
			{children}
			{endIcon && endIcon}
		</button>
	);
});

Button.displayName = 'Button';

export default Button;
