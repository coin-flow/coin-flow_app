import Navbar from './Navbar';
import Topbar from './Topbar';

export default function Header() {
	return (
		<header className="flex flex-col bg-white/60 sticky pt-[-40px] top-[-40px] backdrop-blur-sm">
			<Topbar />
			<Navbar />
		</header>
	);
}
