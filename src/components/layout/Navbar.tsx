import Link from 'next/link';

const links = [{ id: '1', label: '암호화폐', href: '/coin' }];

export default function Navbar() {
	return (
		<nav>
			<Link href="/">
				<span>Logo</span>
			</Link>
			<ul>
				{links.map(link => (
					<li key={link.id}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
			<div>
				<Link href="/notice">공지사항</Link>
				<Link href="/community">커뮤니티</Link>
			</div>
		</nav>
	);
}
