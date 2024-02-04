import { forwardRef } from 'react';
import classNames from 'classnames';

import type { ButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		children,
		className: classNameProps,
		color = 'primary',
		endIcon,
		fullWidth = false,
		loading = false,
		noAnimation = false,
		size = 'md',
		startIcon,
		variant = 'filled',
		...rest
	} = props;

	const className = classNames(
		'btn',
		{ 'btn--full-width': fullWidth },
		{ 'btn--loading': loading },
		{ 'btn--no-animation': noAnimation },
		`btn__color--${color}`,
		`btn__size--${size}`,
		`btn__variant--${variant}`,
		classNameProps
	);

	return (
		<button ref={ref} className={className} {...rest}>
			{startIcon && startIcon}
			{children}
			{endIcon && endIcon}
		</button>
	);
});

Button.displayName = 'Button';

export default Button;
