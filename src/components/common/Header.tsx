import Navbar from './Navbar';
import Topbar from './Topbar';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<header className={styles.container}>
			<Topbar />
			<Navbar />
		</header>
	);
}
