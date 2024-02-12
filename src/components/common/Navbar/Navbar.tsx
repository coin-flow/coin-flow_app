'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Button from '../../ui/Button';
import Logo from '../Logo/Logo';
import { container, left, menuVariant, menus, right, wrapper } from './Navbar.css';

const links = [
	{ id: '1', label: '암호화폐', href: '/coin' },
	{ id: '2', label: '공지사항', href: '/notice' },
	{ id: '3', label: '커뮤니티', href: '/community' }
];

export default function Navbar() {
	const currentPath = usePathname();

	return (
		<div className={container}>
			<nav className={wrapper}>
				<div className={left}>
					<Link href="/">
						<Logo />
					</Link>
					<ul className={menus}>
						{links.map(link => (
							<li key={link.id} className={link.href === currentPath ? menuVariant.active : menuVariant.normal}>
								<Link href={link.href}>{link.label}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={right}>
					<Button size="sm" color="ghost">
						로그인
					</Button>
					<Button size="sm">회원가입</Button>
				</div>
			</nav>
		</div>
	);
}
