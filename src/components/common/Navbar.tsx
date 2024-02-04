'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Button from '../ui/Button';
import Logo from './Logo';
import styles from './Navbar.module.scss';

const links = [
	{ id: '1', label: '암호화폐', href: '/coin' },
	{ id: '2', label: '공지사항', href: '/notice' },
	{ id: '3', label: '커뮤니티', href: '/community' }
];

export default function Navbar() {
	const currentPath = usePathname();

	return (
		<div className={styles.container}>
			<nav className={styles.wrapper}>
				<div className={styles.left}>
					<Link href="/">
						<Logo />
					</Link>
					<ul className={styles.menus}>
						{links.map(link => (
							<li key={link.id} className={`${styles.menu} ${link.href === currentPath && styles['menu--active']}`}>
								<Link href={link.href}>{link.label}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.right}>
					<Button size="sm" color="ghost">
						로그인
					</Button>
					<Button size="sm">회원가입</Button>
				</div>
			</nav>
		</div>
	);
}
