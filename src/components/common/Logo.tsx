import LogoIcon from '../icons/LogoIcon';
import styles from './Logo.module.scss';

export default function Logo() {
	return (
		<div className={styles.container}>
			<LogoIcon />
			<span className={styles.text}>Coplore</span>
		</div>
	);
}
