import LogoIcon from '../../icons/LogoIcon';
import { container, text } from './Logo.css';

export default function Logo() {
	return (
		<div className={container}>
			<LogoIcon />
			<span className={text}>Coplore</span>
		</div>
	);
}
