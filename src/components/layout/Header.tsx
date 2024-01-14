import Navbar from './Navbar';
import Topbar from './Topbar';

export default function Header() {
	return (
		<header className="flex flex-col bg-white">
			<Topbar />
			<Navbar />
		</header>
	);
}
