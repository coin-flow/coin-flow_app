import Navbar from '../Navbar';
import Topbar from '../Topbar';
import { container } from './Header.css';

export default function Header() {
	return (
		<header className={container}>
			<Topbar />
			<Navbar />
		</header>
	);
}
